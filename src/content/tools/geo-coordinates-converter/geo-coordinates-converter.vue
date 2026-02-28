<script setup lang="ts">

import detectCSV from 'detect-csv';
// import { flatten } from 'flatten-anything'; // TODO: Fix flatten-anything
const flatten = (obj: any) => obj;
import { convertFrom } from './geo-coordinates-converter.service';
import { objectArrayToData } from '@/utils/objectarray.export';
import { useQueryParam, useQueryParamOrStorage } from '@/composable/queryParams';

const sourceSystem = useQueryParamOrStorage({ name: 'type', storageName: 'geo-coord-conv:t', defaultValue: 'BD09' });
const inputLatitude = useQueryParam({ tool: 'geo-coord-conv', name: 'lat', defaultValue: 39.915 });
const inputLongitude = useQueryParam({ tool: 'geo-coord-conv', name: 'lng', defaultValue: 116.404 });
const inputCSV = ref('');
const batchRows = ref<string[][]>([]);
const resultsData = ref<Record<string, { lat: number; lng: number }>[]>([]);
const resultsDisplay = computed(() => {
  if (resultsData.value.length !== 1) {
    return [];
  }

  const output: { system: string; decimal: string; dms: string }[] = [];
  for (const [system, { lat: x, lng: y }] of Object.entries(resultsData.value[0])) {
    output.push({
      system,
      decimal: `${x.toFixed(6)}, ${y.toFixed(6)}`,
      dms: `${toDMS(x)}, ${toDMS(y)}`,
    });
  }
  return output;
});

const columns = [
  { title: 'Coordinate System', key: 'system' },
  { title: 'Decimal Format (lng, lat)', key: 'decimal' },
  { title: 'DMS Format (lng, lat)', key: 'dms' },
];

function convertSingle() {
  const converted = convertFrom(sourceSystem.value, inputLongitude.value, inputLatitude.value);
  resultsData.value = [converted];
}

function convertBatch() {
  const delimiter = detectCSV(inputCSV.value)?.delimiter || ',';
  batchRows.value = inputCSV.value.trim().split('\n').map(l => l.trim().split(delimiter).map(s => s.trim()));

  if (batchRows.value.length === 0) {
    return;
  }

  const output = [];

  for (const row of batchRows.value) {
    const [lng, lat] = row.map(Number);
    if (Number.isNaN(Number(lng)) || Number.isNaN(Number(lat))) {
      continue;
    }

    const converted = convertFrom(sourceSystem.value, lng, lat);

    output.push(converted);
  }

  resultsData.value = output;
}

function downloadCsv() {
  const csv = objectArrayToData(resultsData.value.map(r => flatten(r)), 'csv');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'converted_coordinates.csv';
  a.click();

  URL.revokeObjectURL(url);
}

function toDMS(deg: number) {
  const d = Math.floor(deg);
  const m = Math.floor((deg - d) * 60);
  const s = (((deg - d) * 60 - m) * 60).toFixed(2);
  return `${d}°${m}′${s}″`;
}
</script>

<template>
  <div>
    <n-radio-group v-model:value="sourceSystem" mb-2>
      <n-space justify="center">
        <n-radio value="WGS84">
          WGS84/WSG1984/EPSG4326 (Global Standard)
        </n-radio>
        <n-radio value="GCJ02">
          GCJ02/AMap (Gaode, QQ Maps)
        </n-radio>
        <n-radio value="BD09">
          BD09/BD09LL/BMap (Baidu Maps)
        </n-radio>
        <n-radio value="BD09MC">
          BD09MC/BD09Meter (Baidu Meter)
        </n-radio>
        <n-radio value="CGCS2000">
          CGCS2000 (China Geodetic System 2000)
        </n-radio>
        <n-radio value="WebMercator">
          WebMercator/EPSG3857/EPSG900913
        </n-radio>
      </n-space>
    </n-radio-group>

    <n-tabs type="card" mb-1>
      <n-tab-pane name="single" tab="Single Lat/Lng Converter">
        <n-space justify="center">
          <n-form-item label="Latitude:" label-placement="left">
            <NInputNumber v-model:value="inputLatitude" />
          </n-form-item>
          <n-form-item label="Longitude:" label-placement="left">
            <NInputNumber v-model:value="inputLongitude" />
          </n-form-item>
        </n-space>
        <n-space justify="center">
          <n-button type="primary" @click="convertSingle">
            Convert Single
          </n-button>
        </n-space>
      </n-tab-pane>
      <n-tab-pane name="batch" tab="Batch Lat/Lng Converter">
        <c-input-text
          v-model:value="inputCSV"
          label="CSV Content (Lng, Lat):"
          placeholder="Put your Longitude and Latitude (in this order) CSV to convert..."
          multiline
          rows="5"
          mb-2
        />

        <n-space justify="center">
          <n-button
            type="primary"
            @click="convertBatch"
          >
            Convert Batch
          </n-button>
        </n-space>
      </n-tab-pane>
    </n-tabs>

    <c-card v-if="resultsData?.length" title="Conversion Results" mb-2>
      <n-data-table v-if="resultsDisplay?.length" :columns="columns" :data="resultsDisplay" bordered mb-2 />

      <n-space justify="center">
        <n-button
          type="success"
          :disabled="resultsData.length === 0"
          @click="downloadCsv"
        >
          Download {{ resultsData.length }} Results CSV
        </n-button>
      </n-space>
    </c-card>

    <n-alert type="info" title="Notes" mt-3>
      Longitude: East is positive, West is negative.<br>Latitude: North is positive, South is negative.
    </n-alert>
  </div>
</template>

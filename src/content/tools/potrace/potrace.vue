<script setup lang="ts">
import type { Ref } from 'vue';
import { Base64 } from 'js-base64';
import TextareaCopyable from '@/components/TextareaCopyable.vue';

async function traceAsync(input: Uint8Array) {
  return new Promise<string>((resolve, reject) => {
    import('potrace')
      .then((mod: any) => {
        const potrace = mod?.default ?? mod;
        potrace.trace(input, (err: Error | null, svg: string) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(svg);
        });
      })
      .catch(() => reject(new Error('Potrace is not supported in the browser environment.')));
  });
}

async function posterizeAsync(input: Uint8Array) {
  return new Promise<string>((resolve, reject) => {
    import('potrace')
      .then((mod: any) => {
        const potrace = mod?.default ?? mod;
        potrace.posterize(
          input,
          (err: Error | null, svg: string) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(svg);
          },
        );
      })
      .catch(() => reject(new Error('Potrace is not supported in the browser environment.')));
  });
}

function file2Buffer(file: File) {
  return new Promise<Uint8Array>((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const buffer = new Uint8Array(reader.result as ArrayBuffer);
      resolve(buffer);
    });
    reader.readAsArrayBuffer(file);
  });
}

const posterize = ref(true);
const fileInput = ref() as Ref<File>;
const svg = computedAsync(async () => {
  const trace = !posterize.value;
  const file = fileInput.value;
  if (!file) {
    return '';
  }
  try {
    const buffer = await file2Buffer(file);
    return (trace ? await traceAsync(buffer) : await posterizeAsync(buffer));
  }
  catch (e: any) {
    return e.toString();
  }
});

const svgBase64 = computed(() => svg.value ? `data:image/svg+xml;base64,${Base64.encode(svg.value)}` : '');

async function onUpload(file: File) {
  if (file) {
    fileInput.value = file;
  }
}
</script>

<template>
  <div>
    <c-file-upload
      title="Drag and drop an image here, or click to select a file"
      :paste-image="true"
      @file-upload="onUpload"
    />

    <div style="text-align: center;">
      <n-checkbox v-model:checked="posterize" mt-2>
        Posterize?
      </n-checkbox>
    </div>

    <n-divider />

    <div>
      <h3>Potrace result</h3>
      <TextareaCopyable
        :value="svg"
        word-wrap
        download-file-name="output.svg"
      />

      <n-divider />

      <div style="text-align: center;">
        <img width="150" :src="svgBase64" style="background-color: white">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
::v-deep(.n-upload-trigger) {
  width: 100%;
}
</style>

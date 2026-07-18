<script setup lang="ts">

import type { UploadFileInfo } from 'naive-ui';
import ImageCompare from 'image-compare-viewer';
import 'image-compare-viewer/dist/image-compare-viewer.min.css';

const leftUrl = ref('');
const rightUrl = ref('');
const leftImage = ref<string | null>(null);
const rightImage = ref<string | null>(null);
const viewerContainer = ref<HTMLDivElement | null>(null);
let viewerInstance = null;

function loadFromUrl() {
  leftImage.value = leftUrl.value;
  rightImage.value = rightUrl.value;
  renderViewer();
}

function handleLeftUpload({ file }: { file: UploadFileInfo }) {
  leftImage.value = URL.createObjectURL(file.file!);
  renderViewer();
}

function handleRightUpload({ file }: { file: UploadFileInfo }) {
  rightImage.value = URL.createObjectURL(file.file!);
  renderViewer();
}

function renderViewer() {
  if (!leftImage.value || !rightImage.value || !viewerContainer.value) {
    return;
  }

  viewerContainer.value.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'image-compare';
  container.innerHTML = `
    <img src="${leftImage.value}" alt="Left Image" />
    <img src="${rightImage.value}" alt="Right Image" />
  `;
  viewerContainer.value.appendChild(container);

  viewerInstance = new ImageCompare(container, {
    controlColor: '#409EFF',
    smoothing: true,
    addCircle: true,
  });
  viewerInstance.mount();
}
</script>

<template>
  <NCard title="Image Compare Viewer" style="max-width: 800px; margin: auto;">
    <NTabs type="segment">
      <NTabPane name="url" tab="Compare by URL">
        <NForm label-placement="left" label-width="150px">
          <NFormItem label="Left Image URL:">
            <NInput v-model:value="leftUrl" placeholder="Enter left image URL" />
          </NFormItem>
          <NFormItem label="Right Image URL:">
            <NInput v-model:value="rightUrl" placeholder="Enter right image URL" />
          </NFormItem>
          <n-space justify="center">
            <NButton type="primary" @click="loadFromUrl">
              Compare
            </NButton>
          </n-space>
        </NForm>
      </NTabPane>

      <NTabPane name="upload" tab="Compare by Upload">
        <NForm label-placement="left">
          <n-space justify="space-evenly">
            <NFormItem label="Upload Left Image:">
              <NUpload :default-upload="false" accept="image/*" @change="handleLeftUpload">
                <NButton>Upload Left</NButton>
              </NUpload>
            </NFormItem>
            <NFormItem label="Upload Right Image:">
              <NUpload :default-upload="false" accept="image/*" @change="handleRightUpload">
                <NButton>Upload Right</NButton>
              </NUpload>
            </NFormItem>
          </n-space>
        </NForm>
      </NTabPane>
    </NTabs>

    <div ref="viewerContainer" mt-1 />
  </NCard>
</template>

<style scoped>
.image-compare {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
.image-compare img {
  width: 100%;
  object-fit: contain;
}
</style>

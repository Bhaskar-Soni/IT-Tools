<script setup lang="ts">


const svgContent = ref<string | null>(null);
const backgroundColor = ref<string>('#ffffff');

function readAsTextAsync(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => resolve(reader.result?.toString() ?? '');
    reader.onerror = error => reject(error);
  });
}

async function onFileUploaded(uploadedFile: File) {
  svgContent.value = await readAsTextAsync(uploadedFile);
}
</script>

<template>
  <div style="padding: 16px;">
    <c-file-upload
      title="Upload a SVG File"
      paste-image
      accept=".svg"
      mb-1
      @file-upload="onFileUploaded"
    />

    <c-input-text
      v-model:value="svgContent"
      title="Raw SVG Content:"
      rows="6"
      multiline
      placeholder="Paste raw SVG content here..."
      mb-1
    />

    <n-form-item label="Select background:" label-placement="left" mb-1>
      <NColorPicker v-model:value="backgroundColor" />
    </n-form-item>

    <NCard
      title="SVG Preview"
      style="margin-top: 16px; min-height: 300px;"
    >
      <div
        v-if="svgContent"
        :style="{
          backgroundColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          overflow: 'auto',
        }"
        v-html="svgContent"
      />
      <NEmpty v-else description="No SVG loaded yet" />
    </NCard>
  </div>
</template>

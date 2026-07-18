<script setup lang="ts">
import { useDownloadFileFromBase64 } from '@/composable/downloadBase64';

const status = ref<'idle' | 'done' | 'error' | 'processing'>('idle');
const file = ref<File | null>(null);

const base64OutputFile = ref('');
const fileName = ref('');
const { download } = useDownloadFileFromBase64(
  {
    source: base64OutputFile,
    filename: fileName,
    extension: 'jpg',
  });

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };
    img.src = url;
  });
}

function canvasToDataUrl(canvas: HTMLCanvasElement, type: string): Promise<string> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Failed to create image blob'));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Failed to read image blob'));
      reader.readAsDataURL(blob);
    }, type, 0.92);
  });
}

async function onFileUploaded(uploadedFile: File) {
  file.value = uploadedFile;
  fileName.value = `noexif_${uploadedFile.name}`;
  status.value = 'processing';

  try {
    const img = await loadImage(uploadedFile);
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Canvas is not supported');
    }

    ctx.drawImage(img, 0, 0);

    // Re-encode via canvas to strip EXIF metadata
    const mimeType = uploadedFile.type || 'image/jpeg';
    base64OutputFile.value = await canvasToDataUrl(canvas, mimeType);
    status.value = 'done';
    download();
  }
  catch (_e) {
    status.value = 'error';
  }
}
</script>

<template>
  <div>
    <div style="flex: 0 0 100%">
      <div mx-auto max-w-600px>
        <c-file-upload title="Drag and drop a Image file here, or click to select a file" accept="image/*" @file-upload="onFileUploaded" />
      </div>
    </div>

    <div mt-3 flex justify-center>
      <c-alert v-if="status === 'error'" type="error">
        An error occured processing {{ fileName }}
      </c-alert>
      <n-spin
        v-if="status === 'processing'"
        size="small"
      />
    </div>
  </div>
</template>

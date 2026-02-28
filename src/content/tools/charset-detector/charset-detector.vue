<script setup lang="ts">

const inputType = ref<'file' | 'content'>('file');
const fileContent = ref('');
const fileInput = ref() as Ref<File | null>;
const error = ref('');
const contentDecoded = ref('');

async function getUInt8ArrayFromInputs() {
  const fileContentValue = fileContent.value;
  const file = fileInput.value;
  if (inputType.value === 'file' && file) {
    return new Uint8Array(await file.arrayBuffer());
  }
  else if (inputType.value === 'content' && fileContentValue) {
    const uint8Array = new Uint8Array(fileContentValue.length);
    for (let i = 0; i < fileContentValue.length; i++) {
      uint8Array[i] = fileContentValue.charCodeAt(i);
    }
    return uint8Array;
  }
  else {
    return null;
  }
}

function uint8ArrayToBinaryString(bytes: Uint8Array) {
  const chunkSize = 0x8000;
  let result = '';
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    result += String.fromCharCode(...chunk);
  }
  return result;
}

async function getCharsetDetector() {
  // Force browser-friendly UMD build to avoid CJS `exports` runtime errors.
  const module = await import('jschardet/dist/jschardet.js');
  const detector = (module as any).default ?? (module as any).jschardet ?? (window as any).jschardet;
  if (!detector) {
    throw new Error('Charset detector failed to load.');
  }
  return detector;
}

const encodings = computedAsync(async () => {
  error.value = '';
  try {
    const buffer = await getUInt8ArrayFromInputs();
    if (buffer === null) {
      return null;
    }
    const binaryString = uint8ArrayToBinaryString(buffer);
    const detector = await getCharsetDetector();
    const detected = detector.detect(binaryString);
    if (!detected || !detected.encoding) {
      return [];
    }
    return [{
      name: detected.encoding,
      confidence: Math.round((detected.confidence ?? 0) * 100),
      lang: detected.language ?? '',
    }];
  }
  catch (e: any) {
    error.value = e.toString();
    return null;
  }
});

async function generateEncodedOutput(encoding: string) {
  error.value = '';
  contentDecoded.value = '';
  try {
    const buffer = await getUInt8ArrayFromInputs();
    if (buffer === null) {
      return;
    }
    const decoder = new TextDecoder(encoding, { fatal: false });
    contentDecoded.value = decoder.decode(buffer);
  }
  catch (e: any) {
    return e.toString();
  }
}

function onUpload(file: File) {
  if (file) {
    fileInput.value = file;
  }
}
</script>

<template>
  <div style="max-width: 600px;">
    <c-card title="Input" mb-2>
      <n-radio-group v-model:value="inputType" name="radiogroup" mb-2 flex justify-center>
        <n-space>
          <n-radio
            value="file"
            label="File"
          />
          <n-radio
            value="content"
            label="Content"
          />
        </n-space>
      </n-radio-group>

      <c-file-upload
        v-if="inputType === 'file'"
        title="Drag and drop TXT file here, or click to select a file"
        @file-upload="onUpload"
      />

      <c-input-text
        v-if="inputType === 'content'"
        v-model:value="fileContent"
        label="File Content"
        multiline
        placeholder="Put your text content here..."
        rows="15"
        mb-2
      />
    </c-card>

    <c-alert v-if="error">
      {{ error }}
    </c-alert>

    <c-card v-if="!error && encodings" title="Possible encodings">
      <n-table>
        <thead>
          <tr>
            <th scope="col">
              Confidence
            </th>
            <th scope="col">
              Name
            </th>
            <th scope="col">
              Lang
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(enc, index) in encodings || []"
            :key="index"
          >
            <td>
              {{ enc.confidence }}
            </td>
            <td>
              {{ enc.name }}
            </td>
            <td>
              {{ enc.lang }}
            </td>
            <td>
              <n-button @click="generateEncodedOutput(enc.name.toLocaleLowerCase())">
                Decode
              </n-button>
            </td>
          </tr>
        </tbody>
      </n-table>

      <n-card v-if="contentDecoded" title="Decoded text" mb-1>
        <textarea-copyable :value="contentDecoded" />
      </n-card>
    </c-card>
  </div>
</template>

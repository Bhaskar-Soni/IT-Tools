<script setup lang="ts">

import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { withDefaultOnError } from '@/utils/defaults';
import { useQueryParam } from '@/composable/queryParams';

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder('utf-8', { fatal: false });

function encodeWord(value: string, encoding: 'Q' | 'B') {
  const utf8 = textEncoder.encode(value);
  if (encoding === 'B') {
    let binary = '';
    for (const b of utf8) {
      binary += String.fromCharCode(b);
    }
    const base64 = btoa(binary);
    return `=?UTF-8?B?${base64}?=`;
  }

  let encoded = '';
  for (const b of utf8) {
    if (b === 0x20) {
      encoded += '_';
      continue;
    }
    if (b >= 0x21 && b <= 0x7e && b !== 0x3d && b !== 0x3f && b !== 0x5f) {
      encoded += String.fromCharCode(b);
      continue;
    }
    encoded += `=${b.toString(16).toUpperCase().padStart(2, '0')}`;
  }
  return `=?UTF-8?Q?${encoded}?=`;
}

function decodeWord(match: string, charset: string, encoding: string, text: string) {
  if (charset.toLowerCase() !== 'utf-8') {
    // Best-effort: treat as UTF-8 even if charset differs.
  }
  if (encoding.toUpperCase() === 'B') {
    const binary = atob(text);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return textDecoder.decode(bytes);
  }

  // Q-encoding
  const normalized = text.replace(/_/g, ' ');
  const bytes: number[] = [];
  for (let i = 0; i < normalized.length; i += 1) {
    const ch = normalized[i];
    if (ch === '=' && i + 2 < normalized.length) {
      const hex = normalized.slice(i + 1, i + 3);
      const byte = Number.parseInt(hex, 16);
      if (!Number.isNaN(byte)) {
        bytes.push(byte);
        i += 2;
        continue;
      }
    }
    bytes.push(ch.charCodeAt(0));
  }
  return textDecoder.decode(new Uint8Array(bytes));
}

function decodeWords(value: string) {
  return value.replace(/=\?([^?]+)\?([bqBQ])\?([^?]*)\?=/g, decodeWord);
}

const encodedInput = useQueryParam({ tool: 'mime-conv', name: 'decode', defaultValue: '' });
const decodedOutput = computed(() => withDefaultOnError(() => decodeWords(encodedInput.value), '# invalid encoded value'));

const rawInput = useQueryParam({ tool: 'mime-conv', name: 'encode', defaultValue: '' });
const encodedQOutput = computed(() => withDefaultOnError(() => encodeWord(rawInput.value, 'Q'), ''));
const encodedBOutput = computed(() => withDefaultOnError(() => encodeWord(rawInput.value, 'B'), ''));
</script>

<template>
  <div>
    <c-card title="Encode string in Encoded-Word format">
      <c-input-text
        v-model:value="rawInput"
        multiline
        placeholder="Put your string here..."
        rows="5"
        label="String to encode"
        raw-text
        mb-5
      />

      <div>
        <h3>Quotted Printable encoded string</h3>
        <TextareaCopyable
          :value="encodedQOutput"
          placeholder="The Quotted Printable encoded version of your string will be here"
          mb-5
        />
      </div>

      <div>
        <h3>Base64 encoded string</h3>
        <TextareaCopyable
          :value="encodedBOutput"
          placeholder="The Base64 encoded version of your string will be here"
          mb-5
        />
      </div>
    </c-card>

    <c-card title="Decode string in Encoded-Word format">
      <c-input-text
        v-model:value="encodedInput"
        multiline
        placeholder="Your encoded string..."
        rows="5"
        label="Encoded string to decode"
        mb-5
      />

      <div>
        <h3>Decoded string</h3>
        <TextareaCopyable
          v-model:value="decodedOutput"
          placeholder="The decoded string will be here"
          mb-5
        />
      </div>
    </c-card>
  </div>
</template>

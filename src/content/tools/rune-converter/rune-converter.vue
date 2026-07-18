<script setup lang="ts">

import { elderFuthark, futhorc, medievalFuthork, youngerFuthark } from 'riimut';
import { lettersToRunes as stavelessFutharkLettersToRunes, runesToLetters as stavelessFutharkRunesToLetters } from 'staveless-futhark';
import { useCopy } from '@/composable/copy';

type RuneType = 'YoungerFutharkLong' | 'YoungerFutharkShort' | 'ElderFuthark' | 'MedievalFuthork' | 'Futhorc' | 'StavelessFuthark';

function convertTextToRunes(text: string, type: RuneType) {
  if (type === 'YoungerFutharkLong') {
    return youngerFuthark.lettersToLongBranchRunes(text);
  }
  if (type === 'YoungerFutharkShort') {
    return youngerFuthark.lettersToShortTwigRunes(text);
  }
  if (type === 'ElderFuthark') {
    return elderFuthark.lettersToRunes(text);
  }
  if (type === 'MedievalFuthork') {
    return medievalFuthork.lettersToRunes(text);
  }
  if (type === 'Futhorc') {
    return futhorc.lettersToRunes(text);
  }
  if (type === 'StavelessFuthark') {
    return stavelessFutharkLettersToRunes(text);
  }
  return text;
}

function convertRunesToText(runes: string, type: RuneType) {
  if (type === 'YoungerFutharkLong') {
    return youngerFuthark.runesToLetters(runes);
  }
  if (type === 'YoungerFutharkShort') {
    return youngerFuthark.runesToLetters(runes);
  }
  if (type === 'ElderFuthark') {
    return elderFuthark.runesToLetters(runes);
  }
  if (type === 'MedievalFuthork') {
    return medievalFuthork.runesToLetters(runes);
  }
  if (type === 'Futhorc') {
    return futhorc.runesToLetters(runes);
  }
  if (type === 'StavelessFuthark') {
    return stavelessFutharkRunesToLetters(runes);
  }
  return runes;
}

const runeType = ref('YoungerFutharkLong');

const inputText = ref('');
const runesFromText = computed(() => inputText.value.trim() === '' ? '' : convertTextToRunes(inputText.value, runeType.value as RuneType));
const { copy: copyRunes } = useCopy({ source: runesFromText });

const inputRunes = ref('');
const textFromRunes = computed(() => inputRunes.value.trim() === '' ? '' : convertRunesToText(inputRunes.value, runeType.value as RuneType));
const { copy: copyText } = useCopy({ source: textFromRunes });
</script>

<template>
  <div max-w-600px>
    <c-select
      v-model:value="runeType"
      label="Rune Type:"
      label-position="left"
      :options="[['YoungerFutharkLong', 'YoungerFutharkShort', 'ElderFuthark', 'MedievalFuthork', 'Futhorc', 'StavelessFuthark']]"
      placeholder="Rune Type:"
      mb-2
    />

    <c-card title="Text to Runes" mb-2>
      <c-input-text v-model:value="inputText" multiline placeholder="e.g. 'Hello Avengers'" label="Enter text to convert to runes" autosize autofocus raw-text test-id="text-to-runes-input" />
      <c-input-text v-model:value="runesFromText" label="Runes from your text" multiline raw-text readonly mt-2 placeholder="The runes representation of your text will be here" test-id="text-to-runes-output" />
      <div mt-2 flex justify-center>
        <c-button :disabled="!runesFromText" @click="copyRunes()">
          Copy runes to clipboard
        </c-button>
      </div>
    </c-card>

    <c-card title="Runes to Text">
      <c-input-text v-model:value="inputRunes" multiline placeholder="Input Runes" label="Enter runes to convert to text" autosize raw-text test-id="runes-to-text-input" />
      <c-input-text v-model:value="textFromRunes" label="Text from your Runes" multiline raw-text readonly mt-2 placeholder="The text representation of your runes will be here" test-id="runes-to-text-output" />
      <div mt-2 flex justify-center>
        <c-button :disabled="!textFromRunes" @click="copyText()">
          Copy text to clipboard
        </c-button>
      </div>
    </c-card>
  </div>
</template>

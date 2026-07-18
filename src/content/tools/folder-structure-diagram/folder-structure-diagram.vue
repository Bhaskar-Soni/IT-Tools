<script setup lang="ts">

import convertTreeToStructure from './lib/convert-tree-to-structure';
import { generateTree } from './lib/generate-tree';
import { parseInput } from './lib/parse-input';
import { withDefaultOnError } from '@/utils/defaults';

const inputStructureTemplate = `my-app
  src
    index.html
    main.ts
   main.scss
  build
    main.js
    main.css
  - test
    -   index.html
    -main.js
    - 
    ...
      ...

  
  README.md
empty dir`;
const inputStructure = ref(inputStructureTemplate);

const outputTree = computed(() => withDefaultOnError(() => generateTree(parseInput(inputStructure.value)), ''));

const inputTree = ref(generateTree(parseInput(inputStructureTemplate)));

const outputStructure = computed(() => withDefaultOnError(() => convertTreeToStructure((inputTree.value)), ''));

</script>

<template>
  <div class="min-h-0 flex flex-row gap-8" style="margin: 0 auto; max-width: 2200px; flex: 1 !important;">
    <div class="min-w-0 flex-1">
      <c-card title="Indented Structure → Folder Tree">
        <c-input-text
          v-model:value="inputStructure"
          placeholder="Paste your indented structure here..."
          :rows="16"
          multiline
          monospace
          raw-text
        />
      </c-card>

      <n-divider />

      <TextareaCopyable :value="outputTree" :scrollable="true" />
    </div>
    <div class="min-w-0 flex-1">
      <c-card title="Folder Tree → Indented Structure">
        <c-input-text
          v-model:value="inputTree"
          placeholder="Paste your folder tree here..."
          :rows="16"
          multiline
          monospace
          raw-text
        />
      </c-card>

      <n-divider />

      <TextareaCopyable :value="outputStructure" :scrollable="true" />
    </div>
  </div>
</template>

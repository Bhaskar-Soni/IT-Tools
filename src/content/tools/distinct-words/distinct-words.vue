<script lang="ts" setup>


import { computed, ref } from 'vue';
import { countBy, orderBy } from 'lodash';

const inputText = ref('');
const sortedWordCounts = computed(() => {
  // Remove punctuation, extract words, count occurrences
  const cleanedText = inputText.value.replace(/\p{P}+\s|\s\p{P}+|\p{P}+$|^\p{P}+|\s+/gu, ' ').trim(); // Remove punctuation
  const wordCountObj = countBy(cleanedText.split(' ') || []);

  // Convert to array and sort by count descending
  return orderBy(Object.entries(wordCountObj), ([, count]) => count, 'desc');
});
</script>

<template>
  <div>
    <c-input-text v-model:value="inputText" multiline rows="10" label="Text:" placeholder="Enter text..." mb-1 />
    <c-card title="Distinct words">
      <n-table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="([word, count]) in sortedWordCounts" :key="word">
            <td>{{ word }}</td><td>{{ count }}</td>
          </tr>
        </tbody>
      </n-table>
    </c-card>
  </div>
</template>

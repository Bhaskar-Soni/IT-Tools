<script setup lang="ts">

import _ from 'lodash';

const sqlQuery = ref(`select field1,field2,field3 
from my_table 
where my_condition = 'A  Z E';`);
const minifiedQuery = computed(() => {
  const quotedStrings: string[] = [];
  const queryWithoutQuotes = sqlQuery.value.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, (match) => {
    quotedStrings.push(match);
    return `__QUOTE_PLACEHOLDER_${quotedStrings.length - 1}__`;
  });

  let minified = _.trim(queryWithoutQuotes.replace(/\s+/g, ' '));

  quotedStrings.forEach((quote, index) => {
    minified = minified.replace(`__QUOTE_PLACEHOLDER_${index}__`, quote);
  });

  return minified;
});
</script>

<template>
  <c-card title="SQL Minifier">
    <c-input-text v-model:value="sqlQuery" label="SQL Query:" multiline mb-1 rows="10" placeholder="Enter SQL query..." />

    <c-card title="Minified SQL Query">
      <textarea-copyable :value="minifiedQuery" language="sql" download-file-name="output.sql" />
    </c-card>
  </c-card>
</template>

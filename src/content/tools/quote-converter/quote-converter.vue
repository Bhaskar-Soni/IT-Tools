<script setup lang="ts">

import toDoubleQuotes from 'to-double-quotes';
import toSingleQuotes from 'to-single-quotes';
</script>

<template>
  <div>
    <c-card title="Single quotes to double quotes" mb-2>
      <format-transformer
        input-label="Single quoted string"
        input-placeholder="Paste your single quoted string here..."
        output-label="Double quoted string"
        :transformer="toDoubleQuotes"
      />
    </c-card>

    <c-card title="Double quotes to single quotes">
      <format-transformer
        input-label="Double quoted string"
        input-placeholder="Paste your double quoted string here..."
        output-label="Single quoted string"
        :transformer="toSingleQuotes"
      />
    </c-card>
  </div>
</template>

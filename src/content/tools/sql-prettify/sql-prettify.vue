<script setup lang="ts">

import { type IndentStyle, type KeywordCase, format as formatSQL } from 'sql-formatter';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const keywordCase = useQueryParamOrStorage({ name: 'keywordCase', storageName: 'sql-prt:kw', defaultValue: 'upper' });
const dataTypeCase = useQueryParamOrStorage({ name: 'typeCase', storageName: 'sql-prt:dt', defaultValue: 'upper' });
const functionCase = useQueryParamOrStorage({ name: 'functionCase', storageName: 'sql-prt:ft', defaultValue: 'upper' });
const useTabs = useQueryParamOrStorage({ name: 'tabs', storageName: 'sql-prt:tab', defaultValue: false });
const language = useQueryParamOrStorage({ name: 'lang', storageName: 'sql-prt:l', defaultValue: 'sql' });
const indentStyle = useQueryParamOrStorage({ name: 'indent', storageName: 'sql-prt:ind', defaultValue: 'standard' });
const expressionWidth = useQueryParamOrStorage({ name: 'exprWidth', storageName: 'sql-prt:w', defaultValue: 50 });

const inputElement = ref<HTMLElement>();

const caseOptions = [
  { label: "UPPERCASE", value: 'upper' },
  { label: "lowercase", value: 'lower' },
  { label: "Preserve", value: 'preserve' },
];

const rawSQL = ref('select field1,field2,field3 from my_table where my_condition;');
const prettySQL = computed(() => {
  try {
    return ({
      prettyQuery: formatSQL(rawSQL.value, {
        keywordCase: keywordCase.value as KeywordCase,
        dataTypeCase: dataTypeCase.value as KeywordCase,
        functionCase: functionCase.value as KeywordCase,
        useTabs: useTabs.value,
        language: language.value as never,
        indentStyle: indentStyle.value as IndentStyle,
        expressionWidth: expressionWidth.value,
      }),
      error: '',
    });
  }
  catch (e: any) {
    return { prettyQuery: rawSQL.value, error: e.toString() };
  }
});

const sqlDialects = [
  { value: 'sql', label: "Standard SQL" },
  { value: 'bigquery', label: "GCP BigQuery" },
  { value: 'db2', label: "IBM DB2" },
  { value: 'db2i', label: "IBM DB2i (experimental)" },
  { value: 'hive', label: "Apache Hive" },
  { value: 'mariadb', label: "MariaDB" },
  { value: 'mysql', label: "MySQL" },
  { value: 'tidb', label: "TiDB" },
  { value: 'n1ql', label: "Couchbase N1QL" },
  { value: 'plsql', label: "Oracle PL/SQL" },
  { value: 'postgresql', label: "PostgreSQL" },
  { value: 'redshift', label: "Amazon Redshift" },
  { value: 'singlestoredb', label: "SingleStoreDB" },
  { value: 'snowflake', label: "Snowflake" },
  { value: 'spark', label: "Spark" },
  { value: 'sqlite', label: "SQLite" },
  { value: 'transactsql', label: "SQL Server Transact-SQL" },
  { value: 'trino', label: "Trino/Presto" },
];
</script>

<template>
  <div style="flex: 0 0 100%">
    <n-space justify="center" mb-3>
      <c-select
        v-model:value="language"
        flex-1
        label="Dialect"
        :options="sqlDialects"
      />
      <c-select
        v-model:value="keywordCase" label="Keyword case"
        flex-1
        :options="caseOptions"
      />
      <c-select
        v-model:value="dataTypeCase" label="Datatype case"
        flex-1
        :options="caseOptions"
      />
      <c-select
        v-model:value="functionCase" label="Function case"
        flex-1
        :options="caseOptions"
      />
      <c-select
        v-model:value="indentStyle" label="Indent style"
        flex-1
        :options="[[
          { label: 'Standard', value: 'standard' },
          { label: 'Tabular left', value: 'tabularLeft' },
          { label: 'Tabular right', value: 'tabularRight' },
        ]]"
      />
    </n-space>

    <n-space justify="center">
      <n-form-item label="Use tabs" label-placement="left">
        <n-checkbox v-model:checked="useTabs" mr-2 />
      </n-form-item>
      <n-form-item label="Expressions width" label-placement="left">
        <NInputNumber v-model:value="expressionWidth" :min="0" size="small" />
      </n-form-item>
    </n-space>
  </div>

  <n-form-item label="Your SQL query">
    <c-input-text
      ref="inputElement"
      v-model:value="rawSQL"
      placeholder="Put your SQL query here..."
      rows="20"
      multiline
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      monospace
    />
  </n-form-item>

  <n-form-item v-if="!prettySQL.error" label="Prettify version of your query">
    <TextareaCopyable :value="prettySQL.prettyQuery" language="sql" :follow-height-of="inputElement" download-file-name="output.sql" />
  </n-form-item>

  <c-alert v-if="prettySQL.error" title="Parsing error">
    {{ prettySQL.error }}
  </c-alert>
</template>

<style lang="less" scoped>
.result-card {
  position: relative;
  .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>

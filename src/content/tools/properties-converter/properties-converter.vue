<script setup lang="ts">

import yaml from 'yaml';
import properties from 'properties';
// import { flatten } from 'flatten-anything'; // TODO: Fix flatten-anything
const flatten = (obj: any) => obj;

const defaultPropertiesValue = `app_name App

[web]
hostname 10.10.10.10
port 1234

[db]
hostname 10.10.10.20
port 4321`;
const defaultYamlValue = `app_name: App
web:
  hostname: 10.10.10.10
  port: 1234
db:
  hostname: 10.10.10.20
  port: 4321
`;
function fromProperties(value: string) {
  try {
    return yaml.stringify(properties.parse(value, { sections: true, namespaces: true }));
  }
  catch (e: any) {
    return e.toString();
  }
}
function toProperties(value: string) {
  try {
    return properties.stringify(flatten(yaml.parse(value, { intAsBigInt: true })));
  }
  catch (e: any) {
    return e.toString();
  }
}
</script>

<template>
  <c-card title=".properties to YAML">
    <format-transformer
      input-label="Your .properties content:"
      :input-default="defaultPropertiesValue"
      input-placeholder="Paste your .properties content here..."
      output-label="YAML version:"
      output-language="yaml"
      :transformer="fromProperties"
    />
  </c-card>
  <c-card title="YAML to .properties">
    <format-transformer
      input-label="Your YAML content:"
      :input-default="defaultYamlValue"
      input-placeholder="Paste your YAML content here..."
      output-label=".properties version:"
      output-language="ini"
      :transformer="toProperties"
    />
  </c-card>
</template>

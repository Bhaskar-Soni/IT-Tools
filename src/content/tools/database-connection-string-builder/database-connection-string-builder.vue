<script setup lang="ts">

import { useQueryParamOrStorage } from '@/composable/queryParams';

const dbType = useQueryParamOrStorage({ name: 'type', storageName: 'conn-string-builder:t', defaultValue: 'postgres' });
const dbOptions = [
  { label: "MySQL", value: 'mysql' },
  { label: "PostgreSQL", value: 'postgres' },
  { label: "SQL Server", value: 'sqlserver' },
  { label: "SQLite", value: 'sqlite' },
  { label: "MongoDB", value: 'mongodb' },
];

const formatOptions = [
  { label: "URI Scheme", value: 'uri' },
  { label: "Keyword-Value Pairs", value: 'kvp' },
];

const authOptions: Record<string, { label: string; value: string }[]> = {
  mysql: [{ label: "Username/Password", value: 'basic' }],
  postgres: [
    { label: "Username/Password", value: 'basic' },
    { label: "Peer", value: 'peer' },
    { label: "GSSAPI/SSPI", value: 'gssapi' },
  ],
  sqlserver: [
    { label: "Username/Password", value: 'basic' },
    { label: "Windows Integrated", value: 'windows' },
  ],
  sqlite: [],
  mongodb: [
    { label: "Username/Password (SCRAM)", value: 'basic' },
    { label: "X.509 Certificate", value: 'x509' },
  ],
};

const form = ref({
  host: '',
  port: undefined,
  username: '',
  password: '',
  database: '',
  filePath: '',
  ssl: false,
  timeout: undefined,
  extra: '',
  authType: 'basic',
  format: 'uri',
});

const defaultPorts: Record<string, number> = {
  mysql: 3306,
  postgres: 5432,
  sqlserver: 1433,
  mongodb: 27017,
  // sqlite has no port
};

function getPort(db: string, port?: number) {
  if (port && port > 0) {
    return port;
  }
  return defaultPorts[db] || undefined;
}

const connectionString = computed(() => {
  const { host, port, username, password, database, filePath, ssl, timeout, extra, authType, format } = form.value;

  const effectivePort = getPort(dbType.value, port);

  const sslParam = ssl ? (format === 'uri' ? 'ssl=true' : 'Encrypt=true;') : '';
  const timeoutParam = timeout ? (format === 'uri' ? `connectTimeout=${timeout}` : `Connection Timeout=${timeout};`) : '';
  const extras = format === 'uri'
    ? [sslParam, timeoutParam, extra].filter(Boolean).join('&')
    : [sslParam, timeoutParam, extra].filter(Boolean).join('');

  const suffix = format === 'uri' && extras ? `?${extras}` : '';

  switch (dbType.value) {
    case 'mysql':
      return format === 'uri'
        ? `mysql://${username}:${password}@${host}:${effectivePort}/${database}${suffix}`
        : `Server=${host};Port=${effectivePort};Database=${database};User Id=${username};Password=${password};${extras}`;
    case 'postgres':
      if (authType === 'peer') {
        return format === 'uri'
          ? `postgresql://${host}/${database}${suffix}`
          : `Host=${host};Database=${database};Integrated Security=true;${extras}`;
      }
      if (authType === 'gssapi') {
        return format === 'uri'
          ? `postgresql://${host}:${effectivePort}/${database}?auth=gssapi${suffix}`
          : `Host=${host};Port=${effectivePort};Database=${database};Integrated Security=SSPI;${extras}`;
      }
      return format === 'uri'
        ? `postgresql://${username}:${password}@${host}:${effectivePort}/${database}${suffix}`
        : `Host=${host};Port=${effectivePort};Database=${database};User Id=${username};Password=${password};${extras}`;
    case 'sqlserver':
      if (authType === 'windows') {
        return format === 'uri'
          ? `mssql://${host}:${effectivePort};database=${database};trusted_connection=true${suffix}`
          : `Server=${host},${effectivePort};Database=${database};Trusted_Connection=True;${extras}`;
      }
      return format === 'uri'
        ? `mssql://${username}:${password}@${host}:${effectivePort}/${database}${suffix}`
        : `Server=${host},${effectivePort};Database=${database};User Id=${username};Password=${password};${extras}`;
    case 'sqlite':
      return format === 'uri'
        ? `sqlite://${filePath}${suffix}`
        : `Data Source=${filePath};${extras}`;
    case 'mongodb':
      if (authType === 'x509') {
        return format === 'uri'
          ? `mongodb://@${host}:${effectivePort}/${database}?authMechanism=MONGODB-X509${suffix}`
          : `Server=${host}:${effectivePort};Database=${database};AuthMechanism=MONGODB-X509;${extras}`;
      }
      return format === 'uri'
        ? `mongodb://${username}:${password}@${host}:${effectivePort}/${database}${suffix}`
        : `Server=${host}:${effectivePort};Database=${database};User Id=${username};Password=${password};${extras}`;
    default:
      return '';
  }
});
</script>

<template>
  <n-card title="Database Connection String Generator" style="max-width: 750px; margin: auto;">
    <c-select
      v-model:value="dbType"
      :options="dbOptions"
      placeholder="Select a database"
      label="Database type:"
      label-position="left"
      mb-2
    />

    <c-select
      v-model:value="form.format"
      :options="formatOptions"
      placeholder="Select format"
      label="Connection String Format:"
      label-position="left"
      mb-2
    />

    <n-divider>Options</n-divider>

    <n-form :model="form" label-placement="left" label-width="140">
      <n-form-item v-if="authOptions[dbType]?.length" label="Authentication Type">
        <n-select
          v-model:value="form.authType"
          :options="authOptions[dbType]"
          placeholder="Select authentication"
        />
      </n-form-item>

      <template v-if="dbType !== 'sqlite' && form.authType !== 'peer' && form.authType !== 'windows' && form.authType !== 'x509'">
        <n-form-item label="Host">
          <n-input v-model:value="form.host" placeholder="e.g. localhost" />
        </n-form-item>
        <n-form-item label="Port">
          <n-input-number v-model:value="form.port" :min="1" :max="65535" />
        </n-form-item>
        <n-form-item label="Username">
          <n-input v-model:value="form.username" />
        </n-form-item>
        <n-form-item label="Password">
          <n-input v-model:value="form.password" type="password" />
        </n-form-item>
      </template>

      <n-form-item label="Database">
        <n-input v-model:value="form.database" placeholder="e.g. mydb" />
      </n-form-item>

      <n-form-item v-if="dbType === 'sqlite'" label="File Path">
        <n-input v-model:value="form.filePath" placeholder="/path/to/sqlite.db" />
      </n-form-item>

      <details mb-3>
        <summary>Advanced Options</summary>
        <n-form-item label="SSL Enabled">
          <n-switch v-model:value="form.ssl" />
        </n-form-item>
        <n-form-item label="Timeout (s)">
          <n-input-number v-model:value="form.timeout" :min="0" />
        </n-form-item>
        <n-form-item label="Extra Params">
          <n-input v-model:value="form.extra" placeholder="e.g. charset=utf8&applicationName=myapp" />
        </n-form-item>
      </details>
    </n-form>

    <c-card title="Generate Connection String">
      <textarea-copyable :value="connectionString" />
    </c-card>
  </n-card>
</template>

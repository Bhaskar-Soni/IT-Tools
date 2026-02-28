<script setup lang="ts">

import type { CKeyValueListItems } from '@/ui/c-key-value-list/c-key-value-list.types';
import { useQueryParam } from '@/composable/queryParams';
import { analyzeDomain, type DomainIntelligenceResult } from './domain-intelligence.service';

const domain = useQueryParam({ tool: 'domain-intelligence', name: 'domain', defaultValue: 'example.com' });

const result = ref<DomainIntelligenceResult>();
const loading = ref(false);
const errorMessage = ref('');

const dnsTypes = computed(() => {
  return result.value ? Object.keys(result.value.dnsRecords) : [];
});

const overviewItems = computed<CKeyValueListItems>(() => {
  if (!result.value) {
    return [];
  }

  return [
    { label: 'Input', value: result.value.overview.input },
    { label: 'Normalized', value: result.value.overview.normalized },
    { label: 'ASCII (punycode)', value: result.value.overview.asciiDomain },
    { label: 'Unicode', value: result.value.overview.unicodeDomain },
    { label: 'TLD', value: result.value.overview.tld },
    { label: 'Label Count', value: String(result.value.overview.labels) },
    { label: 'Has Subdomain', value: result.value.overview.hasSubdomain ? 'Yes' : 'No' },
    { label: 'DNSSEC', value: result.value.security.dnssecEnabled ? 'Enabled (DS/DNSKEY found)' : 'Not observed' },
  ];
});

const derivedItems = computed<CKeyValueListItems>(() => {
  if (!result.value) {
    return [];
  }

  return [
    { label: 'MX Provider Hints', value: result.value.derived.mxProviderHints.length ? result.value.derived.mxProviderHints.join(', ') : '-' },
    { label: 'NS Provider Hints', value: result.value.derived.nsProviderHints.length ? result.value.derived.nsProviderHints.join(', ') : '-' },
  ];
});

const rdapItems = computed<CKeyValueListItems>(() => {
  if (!result.value?.rdap) {
    return [];
  }

  const rdap = result.value.rdap;

  return [
    { label: 'Handle', value: rdap.handle ?? '-' },
    { label: 'LDH Name', value: rdap.ldhName ?? '-' },
    { label: 'Unicode Name', value: rdap.unicodeName ?? '-' },
    { label: 'Registrar', value: rdap.registrar ?? '-' },
    { label: 'Created', value: rdap.createdAt ?? '-' },
    { label: 'Updated', value: rdap.updatedAt ?? '-' },
    { label: 'Expires', value: rdap.expiresAt ?? '-' },
    { label: 'Status', value: rdap.status.length ? rdap.status.join(', ') : '-' },
    { label: 'Name Servers', value: rdap.nameservers.length ? rdap.nameservers.join(', ') : '-' },
    { label: 'Events', value: rdap.events.length ? rdap.events.map(event => `${event.action}${event.date ? ` (${event.date})` : ''}`).join(' | ') : '-' },
  ];
});

const ipItems = computed<CKeyValueListItems>(() => {
  const ipInfo = result.value?.ipInfo;
  if (!ipInfo) {
    return [];
  }

  return [
    { label: 'IP', value: ipInfo.ip },
    { label: 'Hostname', value: ipInfo.hostname ?? '-' },
    { label: 'Organization', value: ipInfo.org ?? '-' },
    { label: 'City', value: ipInfo.city ?? '-' },
    { label: 'Region', value: ipInfo.region ?? '-' },
    { label: 'Country', value: ipInfo.country ?? '-' },
    { label: 'Postal', value: ipInfo.postal ?? '-' },
    { label: 'Geo (lat,long)', value: ipInfo.loc ?? '-' },
    { label: 'Timezone', value: ipInfo.timezone ?? '-' },
  ];
});

const securityRecords = computed(() => {
  if (!result.value) {
    return [];
  }

  return [
    { title: 'SPF (TXT)', values: result.value.security.spf },
    { title: 'DMARC (_dmarc)', values: result.value.security.dmarc },
    { title: 'BIMI (default._bimi)', values: result.value.security.bimi },
    { title: 'MTA-STS (_mta-sts)', values: result.value.security.mtaSts },
    { title: 'TLS-RPT (_smtp._tls)', values: result.value.security.tlsRpt },
  ];
});

async function runAnalysis() {
  if (!domain.value.trim()) {
    errorMessage.value = 'Please enter a domain first.';
    return;
  }

  loading.value = true;
  errorMessage.value = '';

  try {
    result.value = await analyzeDomain(domain.value);
  }
  catch (error: any) {
    result.value = undefined;
    errorMessage.value = error?.message ?? String(error);
  }
  finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="tool-page">
    <div class="tool-content">
      <div class="input-row">
        <c-input-text
          v-model:value="domain"
          label="Domain"
          label-position="left"
          placeholder="example.com"
          @keyup.enter="runAnalysis"
        />
        <c-button :loading="loading" @click="runAnalysis">
          Analyze Domain
        </c-button>
      </div>

      <n-alert v-if="errorMessage" title="Analysis failed" type="error" mt-4>
        {{ errorMessage }}
      </n-alert>

      <c-card v-if="loading" title="Status" mt-4>
        Collecting DNS, registration, certificate, and infrastructure intelligence...
      </c-card>

      <template v-if="result && !loading">
        <n-alert v-if="result.warnings.length" title="Partial data warnings" type="warning" mb-4>
          <div v-for="warning in result.warnings" :key="warning" class="warning-line">
            {{ warning }}
          </div>
        </n-alert>

        <c-card title="Domain Overview" mb-4>
          <c-key-value-list :items="overviewItems" />
        </c-card>

        <c-card title="DNS Records" mb-4>
          <div v-for="recordType in dnsTypes" :key="recordType" class="record-group">
            <h3>{{ recordType }}</h3>

            <div v-if="result.dnsRecords[recordType as keyof typeof result.dnsRecords].length">
              <textarea-copyable
                v-for="value in result.dnsRecords[recordType as keyof typeof result.dnsRecords]"
                :key="`${recordType}-${value}`"
                :value="value"
                word-wrap
                mb-2
              />
            </div>

            <n-text v-else depth="3">
              No records found.
            </n-text>
          </div>
        </c-card>

        <c-card title="Mail and Security DNS Posture" mb-4>
          <div v-for="entry in securityRecords" :key="entry.title" class="record-group">
            <h3>{{ entry.title }}</h3>
            <div v-if="entry.values.length">
              <textarea-copyable
                v-for="value in entry.values"
                :key="`${entry.title}-${value}`"
                :value="value"
                word-wrap
                mb-2
              />
            </div>
            <n-text v-else depth="3">
              Not configured or not publicly visible.
            </n-text>
          </div>
        </c-card>

        <c-card title="Derived Infrastructure Hints" mb-4>
          <c-key-value-list :items="derivedItems" />
        </c-card>

        <c-card v-if="rdapItems.length" title="RDAP / Registration Intelligence" mb-4>
          <c-key-value-list :items="rdapItems" />
        </c-card>

        <c-card v-if="ipItems.length" title="Primary IP Intelligence" mb-4>
          <c-key-value-list :items="ipItems" />
        </c-card>

        <c-card v-if="result.certificates.length" :title="`Certificate Transparency (Recent Matches${result.certificateSource ? ` - ${result.certificateSource}` : ''})`" mb-4>
          <div v-if="result.certificates.length">
            <textarea-copyable
              v-for="cert in result.certificates"
              :key="`${cert.commonName}-${cert.notAfter}`"
              :value="`${cert.commonName} | issuer=${cert.issuerName ?? '-'} | notBefore=${cert.notBefore ?? '-'} | notAfter=${cert.notAfter ?? '-'} | seen=${cert.entryTimestamp ?? '-'} | dnsNames=${(cert.dnsNames ?? []).join(', ') || '-'} | sha256=${cert.fingerprintSha256 ?? '-'}`"
              word-wrap
              mb-2
            />
          </div>
          <n-text v-else depth="3">
            No certificate entries returned.
          </n-text>
        </c-card>

        <c-card :title="`Discovered Subdomains (${result.discoveredSubdomains.length})`" mb-4>
          <div v-if="result.discoveredSubdomains.length">
            <textarea-copyable
              v-for="name in result.discoveredSubdomains"
              :key="name"
              :value="name"
              word-wrap
              mb-2
            />
          </div>
          <n-text v-else depth="3">
            No additional subdomains discovered from certificate logs.
          </n-text>
        </c-card>

        <c-card title="External Investigation Links">
          <n-space vertical>
            <n-a
              v-for="link in result.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
            >
              {{ link.label }}
            </n-a>
          </n-space>
        </c-card>
      </template>
    </div>
  </div>
</template>

<style scoped>
.tool-page {
  max-width: 980px;
}

.tool-content {
  background-color: #0d1117;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 16px;
  color: #c9d1d9;
}

.input-row {
  display: flex;
  align-items: end;
  gap: 12px;
  flex-wrap: wrap;
}

.record-group {
  margin-bottom: 16px;
}

.record-group h3 {
  margin: 0 0 8px;
  font-size: 14px;
  color: #e6edf3;
}

.warning-line {
  margin-bottom: 6px;
}
</style>

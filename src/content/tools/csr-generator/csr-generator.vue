<script setup lang="ts">
import { ref } from 'vue';

import { generateCSR } from './csr-generator.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';
import { withDefaultOnErrorAsync } from '@/utils/defaults';
import { computedRefreshableAsync } from '@/composable/computedRefreshable';
import { useValidation } from '@/composable/validation';
import { useQueryParam } from '@/composable/queryParams';

const commonName = useQueryParam({ tool: 'csr-gen', name: 'cn', defaultValue: 'test.com' });
const commonNameValidation = useValidation({
  source: commonName,
  rules: [
    {
      message: "Common Name/Domain Name must not be empty",
      validator: value => value?.trim() !== '',
    },
  ],
});

const organizationName = useQueryParam({ tool: 'csr-gen', name: 'org', defaultValue: 'Test' });
const organizationalUnit = useQueryParam({ tool: 'csr-gen', name: 'ou', defaultValue: '' });
const password = ref('');
const city = useQueryParam({ tool: 'csr-gen', name: 'city', defaultValue: 'Paris' });
const state = useQueryParam({ tool: 'csr-gen', name: 'state', defaultValue: 'FR' });
const country = useQueryParam({ tool: 'csr-gen', name: 'country', defaultValue: 'France' });
const contactEmail = useQueryParam({ tool: 'csr-gen', name: 'email', defaultValue: '' });
const subjectAlternativeNames = ref('');
const emptyCSR = { csrPem: '', privateKeyPem: '', publicKeyPem: '' };

const [certs, refreshCerts] = computedRefreshableAsync(
  () => withDefaultOnErrorAsync(() => {
    if (!commonNameValidation.isValid) {
      return emptyCSR;
    }

    return generateCSR({
      password: password.value,
      commonName: commonName.value,
      countryName: country.value,
      city: city.value,
      state: state.value,
      organizationName: organizationName.value,
      organizationalUnit: organizationalUnit.value,
      subjectAlternativeNames: subjectAlternativeNames.value,
      contactEmail: contactEmail.value,
    });
  },
  emptyCSR,
  ), emptyCSR);
</script>

<template>
  <div>
    <div mb-2>
      <n-form-item
        label="Common Name/Domain Name:"
        label-placement="top"
        :feedback="commonNameValidation.message"
        :validation-status="commonNameValidation.status"
      >
        <n-input
          v-model:value="commonName"
          placeholder="Common/Domain Name"
        />
      </n-form-item>
    </div>

    <div>
      <n-form-item
        label="Organization Name:"
        label-placement="left" label-width="100"
      >
        <n-input
          v-model:value="organizationName"
          placeholder="Organization Name"
        />
      </n-form-item>
    </div>

    <div>
      <n-form-item
        label="Organization Unit:"
        label-placement="left" label-width="100"
      >
        <n-input
          v-model:value="organizationalUnit"
          placeholder="Organization Unit"
        />
      </n-form-item>
    </div>

    <div>
      <n-form-item
        label="State:"
        label-placement="left" label-width="100"
      >
        <n-input
          v-model:value="state"
          placeholder="State"
        />
      </n-form-item>
    </div>

    <div>
      <n-form-item
        label="City:"
        label-placement="left" label-width="100"
      >
        <n-input
          v-model:value="city"
          placeholder="City"
        />
      </n-form-item>
    </div>

    <div>
      <n-form-item
        label="Country:"
        label-placement="left" label-width="100"
      >
        <n-input
          v-model:value="country"
          placeholder="Country"
        />
      </n-form-item>
    </div>

    <div>
      <n-form-item
        label="Contact Email:"
        label-placement="left" label-width="100"
      >
        <n-input
          v-model:value="contactEmail"
          placeholder="Contact Email"
        />
      </n-form-item>
    </div>

    <div>
      <n-form-item
        label="Subject Alternative Names:"
        label-placement="top"
      >
        <n-input
          v-model:value="subjectAlternativeNames"
          placeholder="DNS Names, emails, IP, URI..."
          type="textarea"
        />
      </n-form-item>
    </div>

    <div>
      <n-form-item
        label="Private Key passphrase:"
        label-placement="top"
      >
        <n-input
          v-model:value="password"
          type="password"
          show-password-on="mousedown"
          placeholder="Passphrase"
        />
      </n-form-item>
    </div>

    <div flex justify-center>
      <c-button @click="refreshCerts">
        Refresh CSR
      </c-button>
    </div>

    <n-divider />

    <div v-if="commonNameValidation.isValid">
      <div>
        <h3>Certificate Signing Request</h3>
        <TextareaCopyable :value="certs.csrPem" :download-file-name="`${organizationName}.csr`" />
      </div>

      <div>
        <h3>Public key</h3>
        <TextareaCopyable :value="certs.publicKeyPem" word-wrap :download-file-name="`${organizationName}.pem`" />
      </div>

      <div>
        <h3>Private key</h3>
        <TextareaCopyable :value="certs.privateKeyPem" :download-file-name="`${organizationName}.key`" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* NO EXTRACT SCRIPT */
const allowedDomains = ref<string[]>([]);
const allowedIPv4s = ref<string[]>([]);
const allowedIPv6s = ref<string[]>([]);
const includeDomains = ref<string[]>([]);
const mechanisms = ref<string[]>([]);
const policy = ref<string>('~all');
const spfRecord = computed(() => {
  let record = 'v=spf1';

  allowedDomains.value.forEach(domain => record += ` a:${domain}`);
  allowedIPv4s.value.forEach(ip => record += ` ip4:${ip}`);
  allowedIPv6s.value.forEach(ip => record += ` ip6:${ip}`);
  includeDomains.value.forEach(domain => record += ` include:${domain}`);
  mechanisms.value.forEach(mech => record += ` ${mech}`);

  record += ` ${policy.value}`;
  return record;
});
</script>

<template>
  <n-card title="SPF Record Generator">
    <n-form>
      <n-form-item label="Allowed Domains:" label-placement="left">
        <n-dynamic-tags v-model:value="allowedDomains" />
      </n-form-item>
      <n-form-item label="Allowed IPv4s:" label-placement="left">
        <n-dynamic-tags v-model:value="allowedIPv4s" />
      </n-form-item>
      <n-form-item label="Allowed IPv6s:" label-placement="left">
        <n-dynamic-tags v-model:value="allowedIPv6s" />
      </n-form-item>
      <n-form-item label="Include Domains:" label-placement="left">
        <n-dynamic-tags v-model:value="includeDomains" />
      </n-form-item>
      <n-form-item label="Mechanisms:" label-placement="left">
        <n-checkbox-group v-model:value="mechanisms">
          <n-space>
            <n-checkbox value="a">
              A
            </n-checkbox>
            <n-checkbox value="mx">
              MX
            </n-checkbox>
            <n-checkbox value="ptr">
              PTR
            </n-checkbox>
            <n-checkbox value="exists">
              Exists
            </n-checkbox>
            <n-checkbox value="redirect">
              Redirect
            </n-checkbox>
          </n-space>
        </n-checkbox-group>
      </n-form-item>
      <n-form-item label="Policy:" label-placement="left">
        <n-radio-group v-model:value="policy">
          <n-space>
            <n-radio value="+all">
              Pass (+all)
            </n-radio>
            <n-radio value="-all">
              Fail (-all)
            </n-radio>
            <n-radio value="~all">
              SoftFail (~all)
            </n-radio>
            <n-radio value="?all">
              Neutral (?all)
            </n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
    </n-form>

    <c-card title="Generated SPF Record">
      <textarea-copyable :value="spfRecord" />
    </c-card>
  </n-card>
</template>

<script setup lang="ts">
const form = reactive({
  pageUrl: 'https://example.com',
  pageTitle: 'Amazing Page Title',
  pageDescription: 'Brief description of the page',
  selectedPlatform: 'Facebook',
});

interface PageBuilder {
  pageUrl: string
  pageTitle?: string
  pageDescription?: string
}

const platforms = {
  Facebook: ({ pageUrl }: PageBuilder) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
  Twitter: ({ pageUrl, pageTitle }: PageBuilder) =>
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle || '')}`,
  LinkedIn: ({ pageUrl, pageTitle, pageDescription }: PageBuilder) =>
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(pageTitle || '')}&summary=${encodeURIComponent(pageDescription || '')}`,
  Reddit: ({ pageUrl, pageTitle }: PageBuilder) =>
    `https://www.reddit.com/submit?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(pageTitle || '')}`,
  WhatsApp: ({ pageUrl, pageTitle }: PageBuilder) =>
    `https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle || '')}%20${encodeURIComponent(pageUrl)}`,
  Telegram: ({ pageUrl, pageTitle }: PageBuilder) =>
    `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle || '')}`,
  Email: ({ pageUrl, pageTitle, pageDescription }: PageBuilder) =>
    `mailto:?subject=${encodeURIComponent(pageTitle || '')}&body=${encodeURIComponent(pageDescription || '')}%0A${encodeURIComponent(pageUrl)}`,
};

const platformOptions = [
  { label: "Facebook", value: 'Facebook', icon: '📘' },
  { label: "Twitter", value: 'Twitter', icon: '🐦' },
  { label: "LinkedIn", value: 'LinkedIn', icon: '💼' },
  { label: "Reddit", value: 'Reddit', icon: '👽' },
  { label: "WhatsApp", value: 'WhatsApp', icon: '💬' },
  { label: "Telegram", value: 'Telegram', icon: '✈️' },
  { label: "Email", value: 'Email', icon: '📧' },
];

function generateLink(platform: string) {
  const builder = (platforms as Record<string, CallableFunction>)[platform];
  return builder ? builder(form) : '';
}

const generatedLink = computed(() => generateLink(form.selectedPlatform));

function copyAllLinks() {
  const allLinks = platformOptions
    .map(opt => `${opt.icon} ${opt.label}: ${generateLink(opt.value)}`)
    .join('\n\n');
  navigator.clipboard.writeText(allLinks);
}
</script>

<template>
  <n-card title="🔗 Share Link Generator">
    <n-form :model="form" label-placement="top" size="medium">
      <n-form-item label="Page URL">
        <n-input v-model:value="form.pageUrl" placeholder="https://example.com" />
      </n-form-item>
      <n-form-item label="Page Title">
        <n-input v-model:value="form.pageTitle" placeholder="Amazing Page Title" />
      </n-form-item>
      <n-form-item label="Page Description">
        <n-input v-model:value="form.pageDescription" placeholder="Brief description of the page" />
      </n-form-item>
      <n-form-item label="Platform">
        <n-select
          v-model:value="form.selectedPlatform"
          :options="platformOptions"
          placeholder="Choose a platform"
        />
      </n-form-item>
      <input-copyable label="Generated Share Link" :value="generatedLink" readonly />
      <n-space justify="center">
        <n-button type="primary" @click="copyAllLinks">
          📋 Copy All Links
        </n-button>
      </n-space>
    </n-form>

    <n-divider>🔗 All Platforms</n-divider>
    <div v-for="platform in platformOptions" :key="platform.value">
      <input-copyable label-position="left" label-width="110px" :label="`${platform.icon} ${platform.label}:`" :value="generateLink(platform.value)" readonly mb-1 />
    </div>
  </n-card>
</template>

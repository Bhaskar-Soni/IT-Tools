import { createApp } from 'vue';
import { pinia } from './pinia';
import { createHead } from '@vueuse/head';
import { createI18n } from 'vue-i18n';

import { registerSW } from 'virtual:pwa-register';
import shadow from 'vue-shadow-dom';
import { plausible } from './plugins/plausible.plugin';

import 'virtual:uno.css';

import { naive } from './plugins/naive.plugin';

import App from './App.vue';
import router from './router';

registerSW();

// Some libs (e.g. webcrack/babel) expect a Node-like `process` in the browser.
// Provide a minimal shim to avoid runtime errors.
(globalThis as any).process = (globalThis as any).process ?? { env: {} };

// Create minimal i18n instance with fallback translation function
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {},
  },
  globalInjection: true,
  missingWarn: false,
  fallbackWarn: false,
});

const app = createApp(App);

// Suppress the Naive UI Icon component prop validation warning (false positive with markRaw components)
app.config.warnHandler = (msg, instance, trace) => {
  if (msg.includes('Invalid prop') && msg.includes('component')) {
    return;
  }
  console.warn(msg, trace);
};

// Provide a fallback translation function that returns the key if translation is missing
app.config.globalProperties.$t = (key: string): string => key;

app.use(pinia);
app.use(createHead());
app.use(router);
app.use(naive);
app.use(plausible);
app.use(shadow);
app.use(i18n);

app.mount('#app');

import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'javascript-obfuscator',
  title: 'Javascript Obfuscator',
  description: 'Javascript code obfuscator using base64 or rot13 encoding',
  keywords: ['javascript','js','rot13','base64','obfuscator'],
  component: () => import('./javascript-obfuscator.vue'),
  icon: Lock,
  category: 'Java & JavaScript',
};

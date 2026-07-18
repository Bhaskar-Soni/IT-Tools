import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'phishing-url-obfuscation',
  title: 'Phishing Url Obfuscation',
  description: 'A collection of phishing url obfuscation resources and tools',
  keywords: ['phishing-url-obfuscation'],
  category: 'Email Messaging',
  component: () => import('./phishing-url-obfuscation.vue'),
  icon: FileText,
};


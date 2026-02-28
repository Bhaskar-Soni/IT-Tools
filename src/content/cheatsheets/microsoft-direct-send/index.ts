import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'microsoft-direct-send',
  title: 'Microsoft Direct Send',
  description: 'A collection of microsoft direct send resources and tools',
  keywords: ['microsoft-direct-send'],
  category: 'Email Messaging',
  component: () => import('./microsoft-direct-send.vue'),
  icon: FileText,
};


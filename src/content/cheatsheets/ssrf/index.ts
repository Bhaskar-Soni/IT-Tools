import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'ssrf',
  title: 'Ssrf',
  description: 'A collection of ssrf resources and tools',
  keywords: ['ssrf'],
  category: 'WebApp Injections',
  component: () => import('./ssrf.vue'),
  icon: FileText,
};


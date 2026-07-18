import { ExternalLink } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-diff',
  title: 'JSON diff',
  description: 'Compare two JSON objects and get the differences between them.',
  keywords: ['json','diff','compare','difference','object','data'],
  component: () => import('./json-diff.vue'),
  icon: ExternalLink,
  category: 'JSON',
};

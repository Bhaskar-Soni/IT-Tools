import { WorldDownload } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'short-urls-expander',
  title: 'Short Urls Expander',
  description: 'Expand short urls to target full urls',
  keywords: ['short','urls','expander'],
  component: () => import('./short-urls-expander.vue'),
  icon: WorldDownload,
  category: 'Forensic',
};

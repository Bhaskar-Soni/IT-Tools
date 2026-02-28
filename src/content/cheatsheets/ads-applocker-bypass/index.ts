import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'ads-applocker-bypass',
  title: 'Ads Applocker Bypass',
  description: 'A collection of ads applocker bypass resources and tools',
  keywords: ['ads-applocker-bypass'],
  category: 'Windows Defense',
  component: () => import('./ads-applocker-bypass.vue'),
  icon: FileText,
};


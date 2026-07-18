import { Router } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'option43-generator',
  title: 'Option43 generator',
  description: 'Generate Option43 Wifi DHCP configuration',
  keywords: ['option43','wifi','dhcp','generator'],
  component: () => import('./option43-generator.vue'),
  icon: Router,
  category: 'Network',
};

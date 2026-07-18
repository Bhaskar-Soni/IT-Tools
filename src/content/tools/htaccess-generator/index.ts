import { ShieldLock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'htaccess-generator',
  title: 'HTAccess generator',
  description: 'Generate .htaccess file',
  keywords: ['htaccess'],
  component: () => import('./htaccess-generator.vue'),
  icon: ShieldLock,
  category: 'Network',
};

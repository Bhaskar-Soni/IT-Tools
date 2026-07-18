import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'rsyslog',
  title: 'Rsyslog',
  description: 'A collection of rsyslog resources and tools',
  keywords: ['rsyslog'],
  category: 'Configurations',
  component: () => import('./rsyslog.vue'),
  icon: Book,
};


import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'systemd',
  title: 'Systemd',
  description: 'A collection of systemd resources and tools',
  keywords: ['systemd'],
  category: 'Configurations',
  component: () => import('./systemd.vue'),
  icon: Book,
};


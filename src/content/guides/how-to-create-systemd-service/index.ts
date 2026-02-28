import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-create-systemd-service',
  title: 'How To Create Systemd Service',
  description: 'A collection of how to create systemd service resources and tools',
  keywords: ['how-to-create-systemd-service'],
  category: 'How-To Guides',
  component: () => import('./how-to-create-systemd-service.vue'),
  icon: Book,
};


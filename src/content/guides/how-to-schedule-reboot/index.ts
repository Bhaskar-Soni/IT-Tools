import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-schedule-reboot',
  title: 'How To Schedule Reboot',
  description: 'A collection of how to schedule reboot resources and tools',
  keywords: ['how-to-schedule-reboot'],
  category: 'How-To Guides',
  component: () => import('./how-to-schedule-reboot.vue'),
  icon: Book,
};


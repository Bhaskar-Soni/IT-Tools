import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'ssh-hardening',
  title: 'Ssh Hardening',
  description: 'A collection of ssh hardening resources and tools',
  keywords: ['ssh-hardening'],
  category: 'Configurations',
  component: () => import('./ssh-hardening.vue'),
  icon: Book,
};


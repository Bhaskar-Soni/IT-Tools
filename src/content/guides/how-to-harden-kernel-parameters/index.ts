import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-harden-kernel-parameters',
  title: 'How To Harden Kernel Parameters',
  description: 'A collection of how to harden kernel parameters resources and tools',
  keywords: ['how-to-harden-kernel-parameters'],
  category: 'How-To Guides',
  component: () => import('./how-to-harden-kernel-parameters.vue'),
  icon: Book,
};


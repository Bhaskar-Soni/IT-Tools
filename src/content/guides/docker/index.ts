import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'docker',
  title: 'Docker',
  description: 'A collection of docker resources and tools',
  keywords: ['docker'],
  category: 'Configurations',
  component: () => import('./docker.vue'),
  icon: Book,
};


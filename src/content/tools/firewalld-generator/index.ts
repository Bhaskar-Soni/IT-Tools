import { Firetruck } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'firewalld-generator',
  title: 'FW command line generator',
  description: 'Generate fw command lines',
  keywords: ['firewalld','fw'],
  component: () => import('./firewalld-generator.vue'),
  icon: Firetruck,
  category: 'Network',
};

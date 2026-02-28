import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gcloud',
  title: 'Gcloud',
  description: 'A collection of gcloud resources and tools',
  keywords: ['gcloud'],
  category: 'Cloud Commands',
  component: () => import('./gcloud.vue'),
  icon: Terminal,
};


import { ArrowsShuffle } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'data-faker',
  title: 'Data Faker',
  description: 'Generate fake data using JSON template',
  keywords: ['data','json','sample','faker'],
  component: () => import('./data-faker.vue'),
  icon: ArrowsShuffle,
  category: 'Development',
};

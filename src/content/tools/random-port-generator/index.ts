import { Server } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'random-port-generator',
  title: 'Random port generator',
  description: 'Generate random port numbers outside of the range of "known" ports (0-1023).',
  keywords: ['system','port','lan','generator','random','development','computer'],
  component: () => import('./random-port-generator.vue'),
  icon: Server,
  category: 'Network',
};

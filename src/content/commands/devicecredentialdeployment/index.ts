import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'devicecredentialdeployment',
  title: 'Devicecredentialdeployment',
  description: 'A collection of devicecredentialdeployment resources and tools',
  keywords: ['devicecredentialdeployment'],
  category: 'Tool Commands',
  component: () => import('./devicecredentialdeployment.vue'),
  icon: Terminal,
};


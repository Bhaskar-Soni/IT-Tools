import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'meterpreter',
  title: 'Meterpreter',
  description: 'A collection of meterpreter resources and tools',
  keywords: ['meterpreter'],
  category: 'Tool Commands',
  component: () => import('./meterpreter.vue'),
  icon: Terminal,
};



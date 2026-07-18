import { BatteryCharging } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pack-files-for-ai',
  title: 'Pack files for AI',
  description: 'Pack a directory of code source files to a single AI parsable form (like repomix)',
  keywords: ['pack','files','source','code','gpt','claude','repomix','ai'],
  component: () => import('./pack-files-for-ai.vue'),
  icon: BatteryCharging,
  category: 'Text',
};

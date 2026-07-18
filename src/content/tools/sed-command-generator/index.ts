import { CursorText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'sed-command-generator',
  title: 'Sed Command generator',
  description: 'Generate unix sed commands',
  keywords: ['sed','command','generator'],
  component: () => import('./sed-command-generator.vue'),
  icon: CursorText,
  category: 'Text',
};

import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'smtp-user-enum',
  title: 'Smtp User Enum',
  description: 'A collection of smtp user enum resources and tools',
  keywords: ['smtp-user-enum'],
  category: 'Linux Commands',
  component: () => import('./smtp-user-enum.vue'),
  icon: Terminal,
};


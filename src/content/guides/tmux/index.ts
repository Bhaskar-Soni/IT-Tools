import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'tmux',
  title: 'Tmux',
  description: 'A collection of tmux resources and tools',
  keywords: ['tmux'],
  category: 'Configurations',
  component: () => import('./tmux.vue'),
  icon: Book,
};


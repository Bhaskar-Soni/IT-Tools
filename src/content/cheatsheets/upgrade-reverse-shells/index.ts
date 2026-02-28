import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'upgrade-reverse-shells',
  title: 'Upgrade Reverse Shells',
  description: 'A collection of upgrade reverse shells resources and tools',
  keywords: ['upgrade-reverse-shells'],
  category: 'Post Exploitation',
  component: () => import('./upgrade-reverse-shells.vue'),
  icon: FileText,
};


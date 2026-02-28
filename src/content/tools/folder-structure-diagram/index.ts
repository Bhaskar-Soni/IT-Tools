import { Folder } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'folder-structure-diagram',
  title: 'Folder Structure Diagram',
  description: 'tree-like utility for generating ASCII folder structure diagrams',
  keywords: ['folder','structure','diagram','tree','ascii'],
  component: () => import('./folder-structure-diagram.vue'),
  icon: Folder,
  category: 'Text',
};

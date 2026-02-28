import { Artboard } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ascii-text-drawer',
  title: 'ASCII Art Text Generator',
  description: 'Create ASCII art text with many fonts and styles.',
  keywords: ['ascii','asciiart','text','drawer'],
  component: () => import('./ascii-text-drawer.vue'),
  icon: Artboard,
  category: 'Text',
};

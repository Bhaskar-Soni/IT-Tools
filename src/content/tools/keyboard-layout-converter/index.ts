import { Keyboard } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'keyboard-layout-converter',
  title: 'Keyboard Layout Converter',
  description: 'Convert keys sequence from one keyboard layout to another',
  keywords: ['keyboard','layout','converter'],
  component: () => import('./keyboard-layout-converter.vue'),
  icon: Keyboard,
  category: 'Text',
};

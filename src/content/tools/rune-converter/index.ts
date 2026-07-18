import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'rune-converter',
  title: 'Rune converter',
  description: 'Convert Text to Runes and vice-versa',
  keywords: ['rune','converter','ElderFuthark','Futhorc','MedievalFuthork','YoungerFuthark'],
  component: () => import('./rune-converter.vue'),
  icon: FileText,
  category: 'Text',
};

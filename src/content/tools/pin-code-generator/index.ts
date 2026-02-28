import { FileDigit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pin-code-generator',
  title: 'Pin Code Generator',
  description: 'Generate Unique PIN (digits) codes',
  keywords: ['pin','code','digits','generator'],
  component: () => import('./pin-code-generator.vue'),
  icon: FileDigit,
  category: 'Generators',
};

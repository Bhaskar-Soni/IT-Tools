import { FileDigit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'base64-file-converter',
  title: 'Base64 file converter',
  description: 'Convert a string, file, or image into its base64 representation.',
  keywords: ['base64','converter','upload','image','file','conversion','web','data','format'],
  component: () => import('./base64-file-converter.vue'),
  icon: FileDigit,
  category: 'Converters',
};

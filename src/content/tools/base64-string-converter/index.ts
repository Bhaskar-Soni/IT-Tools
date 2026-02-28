import { FileDigit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'base64-string-converter',
  title: 'Base64 string encoder/decoder',
  description: 'Simply encode and decode strings into their base64 representation.',
  keywords: ['base64','converter','conversion','web','data','format','atob','btoa'],
  component: () => import('./base64-string-converter.vue'),
  icon: FileDigit,
  category: 'Converters',
};

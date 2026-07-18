import { FileDigit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'base64-hex-converter',
  title: 'Base64 Hex array encoder/decoder',
  description: 'Simply encode and decode Hex array into a their base64 representation.',
  keywords: ['base64','converter','conversion','web','data','format','atob','btoa','hex'],
  component: () => import('./base64-hex-converter.vue'),
  icon: FileDigit,
  category: 'Converters',
};

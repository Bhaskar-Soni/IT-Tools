import { FileDigit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'hex-file-converter',
  title: 'HEX File Converter',
  description: 'Convert between file and hexadecimal representation',
  keywords: ['hex','file','converter'],
  component: () => import('./hex-file-converter.vue'),
  icon: FileDigit,
  category: 'Development',
};

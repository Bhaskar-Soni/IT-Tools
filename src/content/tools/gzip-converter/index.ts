import { FileZip } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'gzip-converter',
  title: 'GZip/Deflate converter',
  description: 'Convert text from/to gzip/deflate',
  keywords: ['gzip','deflate','converter'],
  component: () => import('./gzip-converter.vue'),
  icon: FileZip,
  category: 'Forensic',
};

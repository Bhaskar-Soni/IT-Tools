import { Photo } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'heic-converter',
  title: 'HEIC Converter',
  description: 'HEIC Converter to JPEG or PNG',
  keywords: ['heic','heif','convert','decoder','converter'],
  component: () => import('./heic-converter.vue'),
  icon: Photo,
  category: 'Images',
};

import { File } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'file-type',
  title: 'File Type Detector',
  description: 'Identify the type of a file',
  keywords: ['file','type','identify','detector'],
  component: () => import('./file-type.vue'),
  icon: File,
  category: 'Forensic',
};

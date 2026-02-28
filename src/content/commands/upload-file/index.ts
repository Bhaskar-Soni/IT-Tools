import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'upload-file',
  title: 'Upload File',
  description: 'A collection of upload file resources and tools',
  keywords: ['upload-file'],
  category: 'Windows Commands',
  component: () => import('./upload-file.vue'),
  icon: Terminal,
};


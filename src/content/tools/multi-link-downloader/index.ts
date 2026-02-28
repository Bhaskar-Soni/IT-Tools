import { FileDownload } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'multi-link-downloader',
  title: 'Multi link downloader',
  description: 'The tool will asynchronously combine the contents of the provided links into a single zip file for you to download. (Requires an internet connection)',
  keywords: ['multi','link','downloader'],
  component: () => import('./multi-link-downloader.vue'),
  icon: FileDownload,
  category: 'Network',
};

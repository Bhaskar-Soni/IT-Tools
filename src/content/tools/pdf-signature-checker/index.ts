import { FileCertificate } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'pdf-signature-checker',
  title: 'PDF signature checker',
  description: 'Verify the signatures of a PDF file. A signed PDF file contains one or more signatures that may be used to determine whether the contents of the file have been altered since the file was signed.',
  keywords: ['pdf','signature','checker','verify','validate','sign'],
  component: () => import('./pdf-signature-checker.vue'),
  icon: FileCertificate,
  category: 'PDF',
};

import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'charset-detector',
  title: 'Text Charset Detector/Decoder',
  description: 'Detect text possible charsets and allow to decode using each detected encoding',
  keywords: ['charset','ascii','iso','utf8','unicode','encoding','decode','text','detector'],
  component: () => import('./charset-detector.vue'),
  icon: FileText,
  category: 'Forensic',
};

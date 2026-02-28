import { Scan } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ocr-image',
  title: 'OCRize image and PDF',
  description: 'Perform OCR (Tesseract) on an image or PDF',
  keywords: ['ocr','image','tesseract','pdf'],
  component: () => import('./ocr-image.vue'),
  icon: Scan,
  category: 'Images',
};

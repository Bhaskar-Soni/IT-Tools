import { MathSymbols } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'math-ocr',
  title: 'Math OCR',
  description: 'Convert Math Formula images to Latex',
  keywords: ['math','ocr','latex','formula','image'],
  component: () => import('./math-ocr.vue'),
  icon: MathSymbols,
  category: 'Maths',
};

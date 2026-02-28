import { MedicalCross } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'bmi-calculator',
  title: 'BMI Calculator',
  description: 'Body Mass Index Calculator (us or metric units)',
  keywords: ['bmi','body','mass'],
  component: () => import('./bmi-calculator.vue'),
  icon: MedicalCross,
  category: 'Data',
};

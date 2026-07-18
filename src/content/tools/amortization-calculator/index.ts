import { ReportMoney } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'amortization-calculator',
  title: 'Amortization Calculator',
  description: 'Calculate loan amortization schedules with monthly payment breakdowns',
  keywords: ['amortization','calculator'],
  component: () => import('./amortization-calculator.vue'),
  icon: ReportMoney,
  category: 'Finance',
};

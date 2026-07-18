import { Mail } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'email-header-analyzer',
  title: 'Email Header Analyzer',
  description: 'Analyze email headers for SPF, DKIM and DMARC',
  keywords: ['email', 'spf', 'dkim', 'dmarc'],
  component: () => import('./email-header-analyzer.vue'),
  icon: Mail,
  category: 'Email',
};

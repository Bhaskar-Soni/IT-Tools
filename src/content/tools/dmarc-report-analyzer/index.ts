import { World } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'dmarc-report-analyzer',
  title: 'DMARC Report Analyzer',
  description: 'Read and display DMARC Xml Reports',
  keywords: ['dmarc','report','analyzer'],
  component: () => import('./dmarc-report-analyzer.vue'),
  icon: World,
  category: 'Forensic',
};

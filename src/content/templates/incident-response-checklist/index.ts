import type { ContentItem } from '@/core/content.types';
import { AlertTriangle } from '@vicons/tabler';

export const content: ContentItem = {
  type: 'template',
  slug: 'incident-response-checklist',
  title: 'Incident Response Checklist',
  description: 'Quick IR response checklist template (DOCX + PDF).',
  keywords: ['template', 'incident response', 'soc', 'dfir', 'docx', 'pdf'],
  component: () => import('./incident-response-checklist.vue'),
  icon: AlertTriangle,
  category: 'Security',
};

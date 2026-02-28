import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'privilege-escalation',
  title: 'Privilege Escalation',
  description: 'A collection of privilege escalation resources and tools',
  keywords: ['privilege-escalation'],
  category: 'Security Concepts',
  component: () => import('./privilege-escalation.vue'),
  icon: FileText,
};


import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'privilege-escalation',
  title: 'Privilege Escalation',
  description: 'A collection of privilege escalation resources and tools',
  keywords: ['privilege-escalation'],
  category: 'Hunting Commands',
  component: () => import('./privilege-escalation.vue'),
  icon: Terminal,
};


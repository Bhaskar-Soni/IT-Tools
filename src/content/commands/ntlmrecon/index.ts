import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ntlmrecon',
  title: 'Ntlmrecon',
  description: 'A collection of ntlmrecon resources and tools',
  keywords: ['ntlmrecon'],
  category: 'Hunting Commands',
  component: () => import('./ntlmrecon.vue'),
  icon: Terminal,
};



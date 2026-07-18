import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'impacket-ntlmrelayx',
  title: 'Impacket Ntlmrelayx',
  description: 'A collection of impacket ntlmrelayx resources and tools',
  keywords: ['impacket-ntlmrelayx'],
  category: 'Hunting Commands',
  component: () => import('./impacket-ntlmrelayx.vue'),
  icon: Terminal,
};



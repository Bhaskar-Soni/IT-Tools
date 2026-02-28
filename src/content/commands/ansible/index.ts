import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'ansible',
  title: 'Ansible',
  description: 'A collection of ansible resources and tools',
  keywords: ['ansible'],
  category: 'Automation Commands',
  component: () => import('./ansible.vue'),
  icon: Terminal,
};


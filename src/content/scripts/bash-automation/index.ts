import type { ContentItem } from '@/core/content.types';
import { Wand } from '@vicons/tabler';

export const content: ContentItem = {
  type: 'script',
  slug: 'bash-automation',
  title: 'Bash Automation Script',
  description: 'Automate common system administration tasks using Bash.',
  keywords: ['bash', 'automation', 'script', 'linux', 'shell'],
  component: () => import('./bash-automation.vue'),
  icon: Wand,
  category: 'Automation',
};

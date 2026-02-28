import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'gitleaks',
  title: 'Gitleaks',
  description: 'A collection of gitleaks resources and tools',
  keywords: ['gitleaks'],
  category: 'Tool Commands',
  component: () => import('./gitleaks.vue'),
  icon: Terminal,
};


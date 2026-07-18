import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'smbcrawler',
  title: 'Smbcrawler',
  description: 'A collection of smbcrawler resources and tools',
  keywords: ['smbcrawler'],
  category: 'Linux Commands',
  component: () => import('./smbcrawler.vue'),
  icon: Terminal,
};


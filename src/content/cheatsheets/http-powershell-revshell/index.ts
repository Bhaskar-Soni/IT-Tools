import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'http-powershell-revshell',
  title: 'Http Powershell Revshell',
  description: 'A collection of http powershell revshell resources and tools',
  keywords: ['http-powershell-revshell'],
  category: 'Post Exploitation',
  component: () => import('./http-powershell-revshell.vue'),
  icon: FileText,
};


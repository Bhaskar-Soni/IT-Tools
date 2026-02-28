import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'microsoft-teams',
  title: 'Microsoft Teams',
  description: 'A collection of microsoft teams resources and tools',
  keywords: ['microsoft-teams'],
  category: 'Email Messaging',
  component: () => import('./microsoft-teams.vue'),
  icon: FileText,
};


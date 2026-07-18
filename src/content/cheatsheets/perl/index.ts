import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'perl',
  title: 'Perl',
  description: 'A collection of perl resources and tools',
  keywords: ['perl'],
  category: 'Programming Data',
  component: () => import('./perl.vue'),
  icon: FileText,
};


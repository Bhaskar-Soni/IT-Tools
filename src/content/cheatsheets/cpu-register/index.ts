import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'cpu-register',
  title: 'Cpu Register',
  description: 'A collection of cpu register resources and tools',
  keywords: ['cpu-register'],
  category: 'OS System',
  component: () => import('./cpu-register.vue'),
  icon: FileText,
};


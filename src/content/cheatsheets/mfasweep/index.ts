import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'mfasweep',
  title: 'Mfasweep',
  description: 'A collection of mfasweep resources and tools',
  keywords: ['mfasweep'],
  category: 'Cloud Identity',
  component: () => import('./mfasweep.vue'),
  icon: FileText,
};


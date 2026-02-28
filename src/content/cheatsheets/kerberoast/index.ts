import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'kerberoast',
  title: 'Kerberoast',
  description: 'A collection of kerberoast resources and tools',
  keywords: ['kerberoast'],
  category: 'Windows AD Attacks',
  component: () => import('./kerberoast.vue'),
  icon: FileText,
};


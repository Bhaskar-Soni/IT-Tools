import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'host-header-injection',
  title: 'Host Header Injection',
  description: 'A collection of host header injection resources and tools',
  keywords: ['host-header-injection'],
  category: 'WebApp Injections',
  component: () => import('./host-header-injection.vue'),
  icon: FileText,
};


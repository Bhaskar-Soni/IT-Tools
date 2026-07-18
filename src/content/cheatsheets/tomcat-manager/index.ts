import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'tomcat-manager',
  title: 'Tomcat Manager',
  description: 'A collection of tomcat manager resources and tools',
  keywords: ['tomcat-manager'],
  category: 'WebApp Injections',
  component: () => import('./tomcat-manager.vue'),
  icon: FileText,
};


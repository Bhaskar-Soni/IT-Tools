import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'java-script-in-xml',
  title: 'Java Script In Xml',
  description: 'A collection of java script in xml resources and tools',
  keywords: ['java-script-in-xml'],
  category: 'Programming Data',
  component: () => import('./java-script-in-xml.vue'),
  icon: FileText,
};


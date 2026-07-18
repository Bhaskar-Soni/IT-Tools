import { HandMove } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'xslt-tester',
  title: 'XSLT tester',
  description: 'Allows to test XML transformation using XSLT Stylesheets',
  keywords: ['xslt','xml','tester'],
  component: () => import('./xslt-tester.vue'),
  icon: HandMove,
  category: 'XML',
};

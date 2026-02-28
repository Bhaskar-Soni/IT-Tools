import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'skype-for-business',
  title: 'Skype For Business',
  description: 'A collection of skype for business resources and tools',
  keywords: ['skype-for-business'],
  category: 'Email Messaging',
  component: () => import('./skype-for-business.vue'),
  icon: FileText,
};


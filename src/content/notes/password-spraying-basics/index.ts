import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'password-spraying-basics',
  title: 'Password Spraying Basics',
  description: 'A collection of password spraying basics resources and tools',
  keywords: ['password-spraying-basics'],
  category: 'Security Concepts',
  component: () => import('./password-spraying-basics.vue'),
  icon: FileText,
};


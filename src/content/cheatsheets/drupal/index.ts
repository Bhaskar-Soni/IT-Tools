import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'drupal',
  title: 'Drupal',
  description: 'A collection of drupal resources and tools',
  keywords: ['drupal'],
  category: 'CMS Platforms',
  component: () => import('./drupal.vue'),
  icon: FileText,
};


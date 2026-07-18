import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'jenkins',
  title: 'Jenkins',
  description: 'A collection of jenkins resources and tools',
  keywords: ['jenkins'],
  category: 'CMS Platforms',
  component: () => import('./jenkins.vue'),
  icon: FileText,
};


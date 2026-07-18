import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'api-securitytrails',
  title: 'API Securitytrails',
  description: 'A collection of api securitytrails resources and tools',
  keywords: ['api-securitytrails'],
  category: 'API',
  component: () => import('./api-securitytrails.vue'),
  icon: FileText,
};



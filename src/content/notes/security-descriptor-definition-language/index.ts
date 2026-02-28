import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'security-descriptor-definition-language',
  title: 'Security Descriptor Definition Language',
  description: 'A collection of security descriptor definition language resources and tools',
  keywords: ['security-descriptor-definition-language'],
  category: 'Identity & AD',
  component: () => import('./security-descriptor-definition-language.vue'),
  icon: FileText,
};


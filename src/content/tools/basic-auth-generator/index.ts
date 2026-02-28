import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'basic-auth-generator',
  title: 'Basic auth generator',
  description: 'Generate a base64 basic auth header from a username and password.',
  keywords: ['basic','auth','generator','username','password','base64','authentication','header','authorization',],
  component: () => import('./basic-auth-generator.vue'),
  icon: Lock,
  category: 'Network',
};

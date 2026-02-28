import { Lock } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'htpasswd-generator',
  title: 'Htpasswd/htaccess generator',
  description: 'htpassword/htaccess user/password generator',
  keywords: ['htpasswd','htaccess','bcrypt','password'],
  component: () => import('./htpasswd-generator.vue'),
  icon: Lock,
  category: 'Network',
};

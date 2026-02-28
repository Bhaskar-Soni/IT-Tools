import { Unlink } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'url-parser',
  title: 'URL parser',
  description: 'Parse a URL into its separate constituent parts (protocol, origin, params, port, username-password, ...)',
  keywords: ['url','parser','protocol','origin','params','port','username','password','href'],
  component: () => import('./url-parser.vue'),
  icon: Unlink,
  category: 'Forensic',
};

import { Link } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'wireguard-config-generator',
  title: 'Wireguard Config Generator',
  description: 'Generate Wireguard Server and Clients configuration files',
  keywords: ['wireguard','config','generator'],
  component: () => import('./wireguard-config-generator.vue'),
  icon: Link,
  category: 'Network',
};

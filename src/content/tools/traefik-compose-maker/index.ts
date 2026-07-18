import { BrandDocker } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'traefik-compose-maker',
  title: 'Traefik Docker Compose Maker',
  description: 'Create a docker compose with Traefik labels ready for a given service and options',
  keywords: ['traefik','docker','compose'],
  component: () => import('./traefik-compose-maker.vue'),
  icon: BrandDocker,
  category: 'Docker',
};

import { EyeOff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'url-fanger',
  title: 'Url Fanger',
  description: 'Defang/Refang an URL or email address',
  keywords: ['url','fanger','fange','defang','refang'],
  component: () => import('./url-fanger.vue'),
  icon: EyeOff,
  category: 'Web',
};

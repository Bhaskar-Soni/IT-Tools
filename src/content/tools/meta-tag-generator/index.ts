import { Tags } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'og-meta-generator',
  title: 'Open graph meta generator',
  description: 'Generate open-graph and socials HTML meta tags for your website.',
  keywords: ['meta','tag','generator','social','title','description','image','share','online','website','open','graph','og',],
  component: () => import('./meta-tag-generator.vue'),
  icon: Tags,
  category: 'Uncategorized',
};

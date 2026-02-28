import { Calculator } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'many-units-converter',
  title: 'Many Units Converter',
  description: 'Convert all kind of units',
  keywords: ['units','uom','metric','imperial','measurement','mass','weight','angle','area','data','energy','force','length','mass','power','pressure','temperature','time','volume','converter'],
  component: () => import('./many-units-converter.vue'),
  icon: Calculator,
  category: 'Converters',
};

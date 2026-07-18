import { ArrowsLeftRight } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'data-storage-unit-converter',
  title: 'Data Storage Unit converter',
  description: 'Convert data storage or transfer units (bytes, bibytes, bits, kilobytes...)',
  keywords: ['data','storage','unit','conversion','bits','bytes','bibytes','binary','KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB','B','KB','MB','GB','TB','PB','EB','ZB','YB','b','Kb','Mb','Gb','Tb','Pb','Eb','Zb','Yb','units'],
  component: () => import('./data-storage-unit-converter.vue'),
  icon: ArrowsLeftRight,
  category: 'Converters',
};

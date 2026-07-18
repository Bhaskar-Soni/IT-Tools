import { DeviceAudioTape } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'dbm-mw-converter',
  title: 'dBm mW Converter',
  description: 'Convert dBm to mW and conversely',
  keywords: ['dbm','mw','converter','units'],
  component: () => import('./dbm-mw-converter.vue'),
  icon: DeviceAudioTape,
  category: 'Converters',
};

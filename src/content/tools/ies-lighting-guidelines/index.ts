import { BuildingLighthouse } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'ies-lighting-guidelines',
  title: 'IES Lighting Guidelines',
  description: 'Search in the Illuminating Engineering Society’s (IES) current illuminance recommendations.',
  keywords: ['ies','illuminance','lighting','guideline'],
  component: () => import('./ies-lighting-guidelines.vue'),
  icon: BuildingLighthouse,
  category: 'Data',
};

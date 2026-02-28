import { DeviceDesktop } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'zpool-calculator',
  title: 'ZPOOL RAID calculator',
  description: 'Determine the usable capacity and other metrics of a ZFS storage pool and compare layouts including stripe, mirror, RAIDZ1, RAIDZ2, RAIDZ3, and dRAID.',
  keywords: ['zpool','raid','calculator','zfs','openzfs'],
  component: () => import('./zpool-calculator.vue'),
  icon: DeviceDesktop,
  category: 'Network',
};

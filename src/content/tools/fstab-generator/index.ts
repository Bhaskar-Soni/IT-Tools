import { DeviceFloppy } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'fstab-generator',
  title: 'FStab Generator',
  description: 'Generate /etc/fstab line',
  keywords: ['fstab','etc'],
  component: () => import('./fstab-generator.vue'),
  icon: DeviceFloppy,
  category: 'Network',
};

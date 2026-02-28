import { DeviceDesktop } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'hdd-calculator',
  title: 'HDD calculator',
  description: 'Storage device manufacturers report capacities in decimal form (like GB), while operating systems and other software uses binary form (GiB), although still incorrectly using the decimal unit (GiB). This tool converts decimal form capacity into various binary forms.',
  keywords: ['hdd','calculator','size','conversion','binary','decimal','gb','mb','tb','gigabyte','gibibyte','megabyte','mebibyte','terabyte','tebibyte'],
  component: () => import('./hdd-calculator.vue'),
  icon: DeviceDesktop,
  category: 'Network',
};

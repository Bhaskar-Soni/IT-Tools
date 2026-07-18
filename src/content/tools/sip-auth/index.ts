import { ShieldCheck } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'sip-auth',
  title: 'SIP Authorization',
  description: 'This tool helps you to verify the SIP authorization header. The tool performs all calculations in the browser and does not transmit sensitive information over the network, so feel free to use it.',
  keywords: ['sip','authorization'],
  component: () => import('./sip-auth.vue'),
  icon: ShieldCheck,
  category: 'Network',
};

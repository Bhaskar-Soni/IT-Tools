import { FileCertificate } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'certificate-key-parser',
  title: 'Certificate/Key parser',
  description: 'Parse Key and Certificate',
  keywords: ['certificate','key','parser'],
  component: () => import('./certificate-key-parser.vue'),
  icon: FileCertificate,
  category: 'Crypto',
};

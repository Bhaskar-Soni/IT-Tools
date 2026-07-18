import { EyeOff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'string-obfuscator',
  title: 'String obfuscator',
  description: 'Obfuscate a string (like a secret, an IBAN, or a token) to make it shareable and identifiable without revealing its content.',
  keywords: ['string','obfuscator','secret','token','hide','obscure','mask','masking'],
  component: () => import('./string-obfuscator.vue'),
  icon: EyeOff,
  category: 'Text',
};

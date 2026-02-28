import { CreditCard } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'emv-tlv-decoder',
  title: 'EMV TLV decoder',
  description: 'Decodes the EMV TLV (tag-length-value) data and its individual tags having extended meaning (such as TVR (Tag 95), Terminal Capabilities (Tag 9F33), etc.)',
  keywords: ['emv','tag','payment','card','tlv','decoder'],
  component: () => import('./emv-tlv-decoder.vue'),
  icon: CreditCard,
  category: 'Forensic',
};

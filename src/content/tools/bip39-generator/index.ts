import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'bip39-generator',
  title: 'BIP39 passphrase generator',
  description: 'Generate a BIP39 passphrase from an existing or random mnemonic, or get the mnemonic from the passphrase.',
  keywords: ['BIP39','passphrase','generator','mnemonic','entropy'],
  component: () => import('./bip39-generator.vue'),
  icon: AlignJustified,
  category: 'Generators',
};

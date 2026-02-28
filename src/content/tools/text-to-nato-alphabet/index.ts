import { Speakerphone } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'text-to-nato-alphabet',
  title: 'Text to NATO alphabet',
  description: 'Transform text into the NATO phonetic alphabet for oral transmission.',
  keywords: ['string','nato','alphabet','phonetic','oral','transmission'],
  component: () => import('./text-to-nato-alphabet.vue'),
  icon: Speakerphone,
  category: 'Text',
};

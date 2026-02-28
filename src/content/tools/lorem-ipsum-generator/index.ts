import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'lorem-ipsum-generator',
  title: 'Lorem ipsum generator',
  description: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
  keywords: ['lorem','ipsum','dolor','sit','amet','placeholder','text','filler','random','generator'],
  component: () => import('./lorem-ipsum-generator.vue'),
  icon: AlignJustified,
  category: 'Text',
};

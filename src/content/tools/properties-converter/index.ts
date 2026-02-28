import { AlignJustified } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'properties-converter',
  title: 'Properties converter',
  description: 'Convert Java .properties file from/to YAML',
  keywords: ['properties','yaml','convert','spring','spring-boot','parse','ini'],
  component: () => import('./properties-converter.vue'),
  icon: AlignJustified,
  category: 'Converters',
};

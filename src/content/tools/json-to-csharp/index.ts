import { CSharp } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'json-to-csharp',
  title: 'JSON to C#',
  description: 'Convert JSON data to C# type definition',
  keywords: ['json','c#','csharp'],
  component: () => import('./json-to-csharp.vue'),
  icon: CSharp,
  category: 'JSON',
};

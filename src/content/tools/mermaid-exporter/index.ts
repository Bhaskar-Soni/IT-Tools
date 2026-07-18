import { Markdown } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mermaid-exporter',
  title: 'Mermaid exporter',
  description: 'Convert Markdown (Mermaid) to image and allow to export to PNG, JPG & SVG',
  keywords: ['mermaid','exporter','markdown','MD'],
  component: () => import('./mermaid-exporter.vue'),
  icon: Markdown,
  category: 'Text',
};

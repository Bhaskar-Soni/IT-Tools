import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'krbrelay-rbcd-local-priv-esc',
  title: 'Krbrelay Rbcd Local Priv Esc',
  description: 'A collection of krbrelay rbcd local priv esc resources and tools',
  keywords: ['krbrelay-rbcd-local-priv-esc'],
  category: 'Identity & AD',
  component: () => import('./krbrelay-rbcd-local-priv-esc.vue'),
  icon: FileText,
};


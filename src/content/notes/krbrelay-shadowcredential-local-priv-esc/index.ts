import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'krbrelay-shadowcredential-local-priv-esc',
  title: 'Krbrelay Shadowcredential Local Priv Esc',
  description: 'A collection of krbrelay shadowcredential local priv esc resources and tools',
  keywords: ['krbrelay-shadowcredential-local-priv-esc'],
  category: 'Identity & AD',
  component: () => import('./krbrelay-shadowcredential-local-priv-esc.vue'),
  icon: FileText,
};


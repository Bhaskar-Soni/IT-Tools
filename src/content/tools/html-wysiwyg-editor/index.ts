import { Edit } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'html-wysiwyg-editor',
  title: 'HTML WYSIWYG editor',
  description: 'Online, feature-rich WYSIWYG HTML editor which generates the source code of the content immediately.',
  keywords: ['html','wysiwyg','editor','p','ul','ol','converter','live'],
  component: () => import('./html-wysiwyg-editor.vue'),
  icon: Edit,
  category: 'Web',
};

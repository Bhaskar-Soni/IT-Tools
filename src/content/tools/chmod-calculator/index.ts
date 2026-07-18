import { FileInvoice } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'chmod-calculator',
  title: 'Chmod calculator',
  description: 'Compute your chmod permissions and commands with this online chmod calculator.',
  keywords: ['chmod','calculator','file','permission','files','directory','folder','recursive','generator','octal','umask',],
  component: () => import('./chmod-calculator.vue'),
  icon: FileInvoice,
  category: 'Network',
};

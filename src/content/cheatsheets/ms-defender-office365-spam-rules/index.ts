import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'cheatsheet',
  slug: 'ms-defender-office365-spam-rules',
  title: 'Ms Defender Office365 Spam Rules',
  description: 'A collection of ms defender office365 spam rules resources and tools',
  keywords: ['ms-defender-office365-spam-rules'],
  category: 'Cloud Identity',
  component: () => import('./ms-defender-office365-spam-rules.vue'),
  icon: FileText,
};


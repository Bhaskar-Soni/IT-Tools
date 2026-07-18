import { MoodSmile } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'emoji-picker',
  title: 'Emoji picker',
  description: 'Copy and paste emojis easily and get the unicode and code points value of each emoji.',
  keywords: ['emoji','picker','unicode','copy','paste'],
  component: () => import('./emoji-picker.vue'),
  icon: MoodSmile,
  category: 'Text',
};

import { Camera } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'camera-recorder',
  title: 'Camera recorder',
  description: 'Take a picture or record a video from your webcam or camera.',
  keywords: ['camera','recoder'],
  component: () => import('./camera-recorder.vue'),
  icon: Camera,
  category: 'Images',
};

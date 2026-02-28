import { Microphone } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mic-tester',
  title: 'Microphone Tester',
  description: 'Replay and Visualize sound from Your microphone, with added one second of delay',
  keywords: ['mic','microphone','test','check','troubleshoot','sound'],
  component: () => import('./mic-tester.vue'),
  icon: Microphone,
  category: 'Network',
};

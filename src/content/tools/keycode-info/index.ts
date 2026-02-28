import { Keyboard } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'keycode-info',
  title: 'Keycode info',
  description: 'Find the javascript keycode, code, location and modifiers of any pressed key.',
  keywords: ['keycode','info','code','javascript','scancode','event','keycodes','which','keyboard','press','modifier','alt','ctrl','meta','shift',],
  component: () => import('./keycode-info.vue'),
  icon: Keyboard,
  category: 'Forensic',
};

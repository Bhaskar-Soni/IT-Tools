import { Browser } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'user-agent-parser',
  title: 'User-agent parser',
  description: 'Detect and parse Browser, Engine, OS, CPU, and Device type/model from an user-agent string.',
  keywords: ['user','agent','parser','browser','engine','os','cpu','device','user-agent','client'],
  component: () => import('./user-agent-parser.vue'),
  icon: Browser,
  category: 'Web',
};

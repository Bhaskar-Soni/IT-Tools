import { Book } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'guide',
  slug: 'how-to-use-python-venv',
  title: 'How To Use Python Venv',
  description: 'A collection of how to use python venv resources and tools',
  keywords: ['how-to-use-python-venv'],
  category: 'How-To Guides',
  component: () => import('./how-to-use-python-venv.vue'),
  icon: Book,
};


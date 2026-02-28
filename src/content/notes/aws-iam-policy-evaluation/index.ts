import { FileText } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'note',
  slug: 'aws-iam-policy-evaluation',
  title: 'Aws Iam Policy Evaluation',
  description: 'A collection of aws iam policy evaluation resources and tools',
  keywords: ['aws-iam-policy-evaluation'],
  category: 'Cloud',
  component: () => import('./aws-iam-policy-evaluation.vue'),
  icon: FileText,
};


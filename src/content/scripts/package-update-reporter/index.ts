import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'package-update-reporter',
  title: 'Package Update Reporter',
  description: 'Detect pending OS package updates and generate a concise operational report.',
  keywords: ['linux packages', 'updates', 'apt', 'dnf', 'security patching'],
  category: 'System',
  component: () => import('./package-update-reporter.vue'),
  icon: Code,
};


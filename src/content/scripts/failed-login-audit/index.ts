import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'failed-login-audit',
  title: 'Failed Login Audit',
  description: 'Audit and summarize failed SSH login attempts to identify abusive sources quickly.',
  keywords: ['security audit', 'failed logins', 'ssh', 'incident response', 'linux'],
  category: 'System',
  component: () => import('./failed-login-audit.vue'),
  icon: Code,
};


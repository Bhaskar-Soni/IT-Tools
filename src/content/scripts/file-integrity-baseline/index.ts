import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'file-integrity-baseline',
  title: 'File Integrity Baseline',
  description: 'Create and verify cryptographic baseline hashes for filesystem integrity checks.',
  keywords: ['file integrity', 'sha256', 'baseline', 'tamper detection', 'linux'],
  category: 'System',
  component: () => import('./file-integrity-baseline.vue'),
  icon: Code,
};


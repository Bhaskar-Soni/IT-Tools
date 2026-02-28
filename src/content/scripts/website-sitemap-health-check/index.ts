import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'website-sitemap-health-check',
  title: 'Website Sitemap Health Check',
  description: 'Fetch sitemap URLs and verify endpoint health with status and latency reporting.',
  keywords: ['sitemap', 'website monitoring', 'url checks', 'seo health', 'python'],
  category: 'Monitoring',
  component: () => import('./website-sitemap-health-check.vue'),
  icon: Code,
};


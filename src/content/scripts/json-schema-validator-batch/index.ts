import { Code } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'script',
  slug: 'json-schema-validator-batch',
  title: 'JSON Schema Validator Batch',
  description: 'Validate multiple JSON documents against a schema for CI and data quality gates.',
  keywords: ['json schema', 'validation', 'batch processing', 'data quality', 'python'],
  category: 'Data Processing',
  component: () => import('./json-schema-validator-batch.vue'),
  icon: Code,
};


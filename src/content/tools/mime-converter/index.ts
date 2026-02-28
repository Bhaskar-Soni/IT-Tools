import { Mail } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'mime-converter',
  title: 'MIME Encoding Converter',
  description: 'Convert from/to MIME Encoded-Word format (Mail Subject)',
  keywords: ['mime','converter','subject','rfc2047','rfc1341','rfc2045'],
  component: () => import('./mime-converter.vue'),
  icon: Mail,
  category: 'Forensic',
};

import { Database } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'sql-prettify',
  title: 'SQL prettify and format',
  description: 'Format and prettify your SQL queries online (it supports various SQL dialects).',
  keywords: ['sql','prettify','beautify','GCPBigQuery','IBMDB2','ApacheHive','MariaDB','MySQL','CouchbaseN1QL','OraclePL/SQL','PostgreSQL','AmazonRedshift','Spark','SQLServerTransact-SQL',],
  component: () => import('./sql-prettify.vue'),
  icon: Database,
  category: 'Development',
};

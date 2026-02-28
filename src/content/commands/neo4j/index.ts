import { Terminal } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'command',
  slug: 'neo4j',
  title: 'Neo4j',
  description: 'A collection of neo4j resources and tools',
  keywords: ['neo4j'],
  category: 'Tool Commands',
  component: () => import('./neo4j.vue'),
  icon: Terminal,
};



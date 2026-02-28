import { Alarm } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'crontab-generator',
  title: 'Crontab generator',
  description: 'Validate and generate crontab and get the human-readable description of the cron schedule.',
  keywords: ['crontab','generator','cronjob','cron','schedule','parse','expression','year','month','week','day','minute','second','aws',],
  component: () => import('./crontab-generator.vue'),
  icon: Alarm,
  category: 'Network',
};

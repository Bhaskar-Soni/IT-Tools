import { DeviceMobile } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'otp-generator',
  title: 'OTP code generator',
  description: '>-',
  keywords: ['otp','code','generator','validator','one','time','password','authentication','MFA','mobile','device','security','TOTP','Time','HMAC',],
  component: () => import('./otp-code-generator-and-validator.vue'),
  icon: DeviceMobile,
  category: 'Uncategorized',
};

import { EyeOff } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'crc-calculator',
  title: 'CRC calculator',
  description: 'Compute text or file CRC (CRC1, CRC8, CRC8 1-Wire, CRC8 DVB-S2, CRC16, CRC16 CCITT, CRC16 Modbus, CRC16 Kermit, CRC16 XModem, CRC24, CRC32, CRC32 MPEG-2, CRCJAM)',
  keywords: ['crc','checksum','crc1','crc8','crc81-wire','crc8dvb-s2','crc16','crc16ccitt','crc16modbus','crc16kermit','crc16xmodem','crc24','crc32','crc32mpeg-2','crcjam'],
  component: () => import('./crc-calculator.vue'),
  icon: EyeOff,
  category: 'Crypto',
};

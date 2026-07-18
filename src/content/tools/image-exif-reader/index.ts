import { FileInfo } from '@vicons/tabler';
import type { ContentItem } from '@/core/content.types';

export const content: ContentItem = {
  type: 'tool',
  slug: 'image-exif-reader',
  title: 'Image EXIF/Metadata/GPS/JPEG Quality reader',
  description: 'Read EXIF, IPTC, XMP, GPS and other metadata, JPEG Quality, and other infos from images files',
  keywords: ['image','exif','reader','iptc','gps','xmp','jpeg','quality'],
  component: () => import('./image-exif-reader.vue'),
  icon: FileInfo,
  category: 'Images',
};

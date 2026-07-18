import type { OGSchemaType } from '../OGSchemaType.type';
import { videoMovie } from './videoMovie';

export const videoTVShow: OGSchemaType = {
  name: 'TV Show Details',
  elements: [...videoMovie.elements],
};

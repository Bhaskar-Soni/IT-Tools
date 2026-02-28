import type { OGSchemaType } from '../OGSchemaType.type';
import { videoMovie } from './videoMovie';

export const videoOther: OGSchemaType = {
  name: 'Other Video Details',
  elements: [...videoMovie.elements],
};

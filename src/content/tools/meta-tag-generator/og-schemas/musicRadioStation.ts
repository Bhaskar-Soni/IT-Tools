import type { OGSchemaType } from '../OGSchemaType.type';

export const musicRadioStation: OGSchemaType = {
  name: 'Radio Station Details',
  elements: [
    { type: 'input', label: 'Creator', key: 'music:creator', placeholder: 'The creator of this radio station' },
  ],
};

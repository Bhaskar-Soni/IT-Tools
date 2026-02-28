import type { OGSchemaType } from '../OGSchemaType.type';

export const twitter: OGSchemaType = {
  name: 'Twitter',
  elements: [
    {
      type: 'select',
      options: [
        { label: 'Summary', value: 'summary' },
        { label: 'Summary with large image', value: 'summary_large_image' },
        { label: 'App', value: 'app' },
        { label: 'Player', value: 'player' },
      ],
      label: 'Card Type',
      placeholder: 'The Twitter card type',
      key: 'twitter:card',
    },
    {
      type: 'input',
      label: 'Site Account',
      placeholder: 'The Twitter account of the site (e.g., @ittoolsdottech)',
      key: 'twitter:site',
    },
    {
      type: 'input',
      label: 'Creator Account',
      placeholder: 'The Twitter account of the creator (e.g., @cthmsst)',
      key: 'twitter:creator',
    },
  ],
};

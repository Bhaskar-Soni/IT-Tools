import type { OGSchemaType } from '../OGSchemaType.type';

export const image: OGSchemaType = {
  name: 'Image',
  elements: [
    {
      type: 'input',
      label: 'Image URL',
      placeholder: 'The URL of your website social image',
      key: 'image',
    },
    {
      type: 'input',
      label: 'Image Alt',
      placeholder: 'The alternative text of your website social image',
      key: 'image:alt',
    },
    {
      type: 'input',
      label: 'Width',
      placeholder: 'Width in px of your website social image',
      key: 'image:width',
    },
    {
      type: 'input',
      label: 'Height',
      placeholder: 'Height in px of your website social image',
      key: 'image:height',
    },
  ],
};

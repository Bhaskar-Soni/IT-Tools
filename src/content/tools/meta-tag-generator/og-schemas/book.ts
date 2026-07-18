import type { OGSchemaType } from '../OGSchemaType.type';

export const book: OGSchemaType = {
  name: 'Book',
  elements: [
    { type: 'input', label: 'Author', key: 'book:author', placeholder: 'Who wrote this book' },
    { type: 'input', label: 'ISBN', key: 'book:isbn', placeholder: 'The international standard book number' },
    {
      type: 'input',
      label: 'Release Date',
      key: 'book:release_date',
      placeholder: 'The date the book was released',
    },
    { type: 'input', label: 'Tag', key: 'book:tag', placeholder: 'Tag words associated with this book' },
  ],
};

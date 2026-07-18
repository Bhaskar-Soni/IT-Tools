import type { OGSchemaType } from '../OGSchemaType.type';

export const videoMovie: OGSchemaType = {
  name: 'Movie Details',
  elements: [
    {
      type: 'input-multiple',
      label: 'Actor',
      key: 'video:actor',
      placeholder: 'Name of the actor/actress',
    },
    // { type: 'input', label: 'Actor role', key: 'video:actor:role', placeholder: 'The role they played...' },
    {
      type: 'input-multiple',
      label: 'Director',
      key: 'video:director',
      placeholder: 'Name of the director',
    },
    { type: 'input-multiple', label: 'Writer', key: 'video:writer', placeholder: 'Writers of the movie' },
    { type: 'input', label: 'Duration', key: 'video:duration', placeholder: 'Movie length in seconds' },
    {
      type: 'input',
      label: 'Release Date',
      key: 'video:release_date',
      placeholder: 'The date the movie was released',
    },
    { type: 'input', label: 'Tag', key: 'video:tag', placeholder: 'Tag words associated with this movie' },
  ],
};

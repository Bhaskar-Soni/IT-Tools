import type { OGSchemaType } from '../OGSchemaType.type';

export const musicAlbum: OGSchemaType = {
  name: 'Album Details',
  elements: [
    { type: 'input', label: 'Song', key: 'music:song', placeholder: 'The song on this album' },
    {
      type: 'input',
      label: 'Disc',
      key: 'music:song:disc',
      placeholder: 'Same as music:album:disc but in reverse',
    },
    {
      type: 'input',
      label: 'Track',
      key: 'music:song:track',
      placeholder: 'Same as music:album:track but in reverse',
    },
    { type: 'input', label: 'Musician', key: 'music:musician', placeholder: 'The musician that made this song' },
    {
      type: 'input',
      label: 'Release Date',
      key: 'music:release_date',
      placeholder: 'The date the album was released',
    },
  ],
};

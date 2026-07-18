import type { OGSchemaType } from '../OGSchemaType.type';


const typeOptions = [
  { label: 'Website', value: 'website' },
  { label: 'Article', value: 'article' },
  { label: 'Book', value: 'book' },
  { label: 'Profile', value: 'profile' },
  {
    type: 'group',
    label: 'Music',
    key: 'music',
    children: [
      { label: 'Song', value: 'music.song' },
      { label: 'Album', value: 'music.album' },
      { label: 'Playlist', value: 'music.playlist' },
      { label: 'Radio Station', value: 'music.radio_station' },
    ],
  },
  {
    type: 'group',
    label: 'Video',
    key: 'video',
    children: [
      { label: 'Movie', value: 'video.movie' },
      { label: 'Episode', value: 'video.episode' },
      { label: 'TV Show', value: 'video.tv_show' },
      { label: 'Other Video', value: 'video.other' },
    ],
  },
];

export const website: OGSchemaType = {
  name: 'General Information',
  elements: [
    {
      type: 'select',
      label: 'Page Type',
      placeholder: 'Select the type of your website',
      key: 'type',
      options: typeOptions,
    },
    { type: 'input', label: 'Title', placeholder: 'Enter the title of your website', key: 'title' },
    {
      type: 'input',
      label: 'Description',
      placeholder: 'Enter the description of your website',
      key: 'description',
    },
    {
      type: 'input',
      label: 'Page URL',
      placeholder: 'Enter the URL of your website',
      key: 'url',
    },
  ],
};

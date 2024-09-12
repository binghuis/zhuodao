export type Photo = {
  id: string;
  name: string;
  href: string;
  username: string;
  imageSrc: string;
};

const photos: Photo[] = [
  {
    id: '1',
    name: 'Kevin Canlas',
    href: 'https://twitter.com/kvncnls/status/1471832344986324998',
    username: '@kvncnls',
    imageSrc: 'https://pbs.twimg.com/media/FGz_t1wXIAIFyT-?format=jpg',
  },
  {
    id: '2',
    name: 'Pedro Duarte',
    href: 'https://twitter.com/peduarte/status/1463897468383412231',
    username: '@peduarte',
    imageSrc: 'https://pbs.twimg.com/media/FFDOtLkWYAsWjTM?format=jpg',
  },
];

export default photos;

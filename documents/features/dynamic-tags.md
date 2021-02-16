const headers = [
  'This is a h1 header tag',
  'This is a h2 header tag',
  'This is a h3 header tag',
  'This is a h4 header tag',
  'This is a h5 header tag',
  'This is a h6 header tag',
];

const Headers = r(
  headers.map(( text, index ) => r(`h${index + 1}`, text))
);

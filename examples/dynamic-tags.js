import faker from 'faker';

const code = () =>
  `const headers = [
    'This is a h1 header tag',
    'This is a h2 header tag',
    'This is a h3 header tag',
    'This is a h4 header tag',
    'This is a h5 header tag',
    'This is a h6 header tag',
  ];

  const Headers = r(
    headers.map(( text, index ) => r(\`h\${index + 1}\`, text))
  );`;

const result = () =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>React Hyper</title>
      <base href="/" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>`;

const dynamicTags = {
  title: 'Dynamic Components',
  content: faker.lorem.paragraph(),
  icon: 'pagination',
  code: code(),
  result: result(),
  play: 'https://www.google.com',
  result_language: 'html',
  language: 'javascript',
};

export default dynamicTags;

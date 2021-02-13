module.exports = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader',
      },
      {
        loader: 'markdown-loader',
        options: {
          headerIds: false,
        },
      },
    ],
  });

  return config;
};

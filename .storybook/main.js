// .storybook/main.js
export default {
  framework: { name: '@storybook/react-webpack5', options: {} },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],

  webpackFinal: async (config) => {
    // JSX 트랜스파일 규칙 추가
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    });

    // .jsx import 편의
    config.resolve.extensions = config.resolve.extensions || [];
    for (const ext of ['.js', '.jsx']) {
      if (!config.resolve.extensions.includes(ext)) {
        config.resolve.extensions.push(ext);
      }
    }

    return config;
  },
};

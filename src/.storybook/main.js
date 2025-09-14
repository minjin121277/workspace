export default {
  framework: { name: '@storybook/react-webpack5', options: {} },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
};

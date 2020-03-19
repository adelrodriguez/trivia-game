module.exports = {
  stories: [
    '../src/**/*.story.tsx',
    '../src/**/*.stories.tsx',
    '../src/**/*.stories.js',
    '../src/**/*.story.js',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
  ],
};

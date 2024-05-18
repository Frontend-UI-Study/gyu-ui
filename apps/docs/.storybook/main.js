import { dirname, join } from 'path';
import remarkGfm from 'remark-gfm';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config = {
  stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx', '../stories/**/*.mdx'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    // add addon
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    // figma 링크 추가하면 피그마 디자인 볼 수 있음. 근데 너무 느림..
    // getAbsolutePath('@storybook/addon-designs'),
    // https://storybook.js.org/addons/@storybook/test-runner/ <- 스토리북에서 테스트 코드 작성하고 싶다면
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  core: {},

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
    };
  },

  docs: {
    autodocs: true,
  },
};

export default config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OSS compass',
  tagline: '',
  url: 'https://compass.gitee.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oss-compass', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'modules',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/oss-compass/docs/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['./plugin/postcss-tailwind-loader'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: true,
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Tutorial',
            items: [
              { label: 'Get Standard', to: '/docs/get-start' },
              { label: 'Dimensions Define', to: '/docs/intro' },
              { label: 'Models', to: '/docs/intro' },
              { label: 'Metrics Define', to: '/docs/intro' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Terms', href: '/' },
              { label: 'Privacy', href: '/' },
              { label: 'Built With', href: '/' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/slack-vit2156/shared_invite/zt-1hv9pabzr-80W3QeM4zABSJFWEmPNipw',
              },
              { label: 'WeChat', href: '/' },
            ],
          },
          {
            title: 'Code',
            items: [
              { label: 'Github', href: 'https://github.com/oss-compass' },
              { label: 'Gitee', href: 'https://gitee.com/oss-compass' },
            ],
          },
        ],
        copyright: `Copyright©${new Date().getFullYear()} OSS compass. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

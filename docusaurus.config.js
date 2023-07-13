// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const vercel = process.env.VERCEL_ENV === 'preview';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OSS compass',
  tagline: '',
  url: 'https://compass.gitee.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
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
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'modules',
          routeBasePath: 'docs',
          exclude: ['**/blog/**'],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Advanced use-case: functional editUrl
          editUrl: (editUrlParams) => {
            const { docPath, locale } = editUrlParams;
            const repo = docPath.split('/').shift();
            const file = docPath.split('/').splice(1).join('/');

            let repo_slug = repo;
            if (locale !== 'en') {
              repo_slug = `${repo}-${locale}`;
            }
            return `https://github.com/oss-compass/${repo_slug}/blob/main/${file}`;
          },
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: false,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [require.resolve('./src/style/custom.scss')],
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    './plugin/postcss-tailwind-loader',
    './plugin/fix-canvas-node-error',
  ],

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
        items: [{ to: 'blog', label: 'Blog', position: 'left' }],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Tutorial',
            items: [
              { label: 'Quick start', to: '/docs/quick-start' },
              { label: 'Dimensions Define', to: '/docs/dimensions-define' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Terms', href: '/docs/terms-of-use' },
              { label: 'Privacy', href: '/docs/privacy-policy' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Slack', href: '/docs/community/slack' },
              { label: 'WeChat', href: '/docs/community/wechat' },
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

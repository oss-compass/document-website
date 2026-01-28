// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: ['./src/style/custom.scss'],
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    'docusaurus-plugin-sass',
    './plugin/postcss-tailwind-loader',
    './plugin/fix-canvas-node-error',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/dimensions-define',
            to: '/docs/service-guide',
          },
        ],
      },
    ],
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
              { label: 'Service Guide', to: '/docs/service-guide' },
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
              { label: 'AtomGit', href: 'https://atomgit.com/oss-compass' },
            ],
          },
        ],
        copyright: `Copyright©${new Date().getFullYear()} OSS compass. All Rights Reserved.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

export default config;

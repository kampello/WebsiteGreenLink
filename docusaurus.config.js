// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'GreenLink Project',
  tagline: 'We Love Broccoli',
  favicon: 'img/favicon.ico',


  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'], // alinhado com i18n
      },
    ],
  ],

  future: {
    v4: true,
  },

  url: 'https://github.com/',
  baseUrl: '/WebsiteGreenLink/',

  organizationName: 'kampello',
  projectName: 'WebsiteGreenLink',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,
  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/kampello/GreenLink/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/kampello/GreenLink/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
          title: 'GreenLink',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: 'Documentação',
            },
            { to: '/blog', label: 'Blog', position: 'left' },
            { to: '/source_code_setup', label: 'Setup', position: 'left' },
            { to: '/colaboradores', label: 'About Us', position: 'left' },
            { to: '/tutorial', label: 'Tutorial', position: 'left' },
            { to: '/download', label: 'Download', position: 'left' },
            { to: '/apoio', label: 'Apoio/FQA', position: 'left' },
            
            {
              type: 'search',
              position: 'right',
            },

            {
              href: 'https://github.com/kampello/GreenLink/',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X',
                href: 'https://x.com/elonmusk',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kampello/GreenLink/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GreenLink by Paulo, David, Gonçalo & Ricardo.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
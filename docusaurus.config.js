// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Void Linux 中文手册",
  tagline: "Void Linux 中文手册",
  url: "https://void-docs.zhuof.engineer",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.png",
  organizationName: "fenprace", // Usually your GitHub org/user name.
  projectName: "void-docs-zh-hans", // Usually your repo name.

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/fenprace/void-docs-zh-hans/tree/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Void Linux 中文手册",
        logo: {
          alt: "Void Linux Logo",
          src: "logo.svg",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "about/index",
            label: "文档",
          },
          {
            to: "status",
            label: "翻译进度",
            position: "left",
          },
          {
            href: "https://github.com/fenprace/void-docs-zh-hans/issues",
            label: "Issuses",
            position: "right",
          },
          {
            href: "https://github.com/fenprace/void-docs-zh-hans",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Void Linux",
            items: [
              {
                label: "Home",
                href: "https://voidlinux.org",
              },
              {
                label: "Download",
                href: "https://voidlinux.org/download",
              },
              {
                label: "GitHub",
                href: "https://github.com/void-linux",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "Issues",
                href: "https://github.com/fenprace/void-docs-zh-hans/issues",
              },
              {
                label: "GitHub",
                href: "https://github.com/fenprace/void-docs-zh-hans",
              },
            ],
          },
        ],
        copyright: `本站点不是 Void Linux 的官方站点。<br />Copyright © ${new Date().getFullYear()} FENPRACE. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

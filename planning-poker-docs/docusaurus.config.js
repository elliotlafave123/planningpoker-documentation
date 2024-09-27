module.exports = {
  title: "Planning Poker Documentation",
  tagline: "An open-source tool for collaborative story estimation",
  url: "http://planningpoker.webcrafters.co.uk",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "elliotlafave123",
  projectName: "planningpoker-mvc-csharp-signalir",
  themeConfig: {
    navbar: {
      title: "Planning Poker",
      logo: {
        alt: "Planning Poker Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "docs/", label: "Documentation", position: "left" },
        {
          href: "https://github.com/elliotlafave123/planningpoker-mvc-csharp-signalir",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Getting Started", to: "docs/" },
            { label: "Contributing", to: "docs/contributing" },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Issues",
              href: "https://github.com/elliotlafave123/planningpoker-mvc-csharp-signalir/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Manchester WebCrafters LTD.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

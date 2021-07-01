import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-US",
  title: "Spotistats Support",
  description: "Work in progress",
  bundler: "@vuepress/vite",
  themeConfig: {
    logo: "/assets/icon.png",
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },
    sidebar: [
      { link: "/permissions", text: "Permissions", children: [] },
      { link: "/faq", text: "FAQ", children: [] },
      {
        link: "/import",
        text: "Import",
        children: [
          {
            link: "/import/guide",
            text: "Guide",
            children: [],
          },
        ],
      },
    ],
  },
});

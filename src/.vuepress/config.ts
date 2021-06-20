// module.exports = {
//   title: "Spotistats Support",
//   themeConfig: {
//     sidebar: [
//       {
//         text: "Home",
//         link: "/",
//       },
//       {
//         text: "Permissions",
//         link: "/permissions",
//       },
//       {
//         text: "Import guide",
//         link: "/import/guide",
//       },
//     ],
//   },
// };
import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-US",
  title: "Spotistats Support",
  description: "Work in progress",
  bundler: "@vuepress/vite",
  themeConfig: {
    logo: "/assets/icon.png",
  },
});

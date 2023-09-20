import vueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros";
import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vElement",
  description: "vElement组件库",
  vite: {
    server: {
      port: 3010,
      strictPort: true,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },

    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/button.md" },
    ],

    sidebar: [
      {
        text: "通用组件",
        items: [
          {
            text: "按钮",
            link: "../components/button.md",
          },
          {
            text: "手风琴",
            link: "../components/collapse.md",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});

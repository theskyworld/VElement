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
            text: "按钮&nbsp;Button",
            link: "../components/button.md",
          },
          {
            text: "折叠面板&nbsp;Collapse",
            link: "../components/collapse.md",
          },
          {
            text: "弹出提示&nbsp;tooltip",
            link: "../components/tooltip.md",
          },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present tsw",
    },
    search: {
      provider: "local",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },

  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});

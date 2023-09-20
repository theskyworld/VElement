import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer,
} from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import { App } from "vue";
import DefaultTheme from "vitepress/theme";

// 添加自定义样式
import "../../../src/styles/index.css";
import "@vitepress-demo-preview/component/dist/style.css";

// 图标
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// 重写默认的主题样式
import "./custom.css";

// 注册需要使用的图标
library.add(fas);
export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", NaiveUIContainer);
  },
};

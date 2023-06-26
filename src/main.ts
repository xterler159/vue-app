import { createApp } from "vue";

import App from "./App.vue";
import { router } from "./router/index";

import "./assets/reset.scss";
import "./assets/index.scss";
import "./assets/app.scss";

createApp(App).use(router).mount("#app");

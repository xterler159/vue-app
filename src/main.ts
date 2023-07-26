import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from "./App.vue";
import { router } from "@/router";
import store from "./store";

import "./assets/reset.scss";
import "./assets/index.scss";
import "./assets/app.scss";

// createApp(App).use(router).use(store).mount("#app");
createApp(App).use(router).use(store).use(VueQueryPlugin).mount("#app");

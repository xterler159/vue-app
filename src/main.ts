import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";

import App from "./App.vue";
import { router } from "@/router";

import "./assets/reset.scss";
import "./assets/index.scss";
import "./assets/app.scss";

const pinia = createPinia();

// createApp(App).use(router).use(store).mount("#app");
createApp(App).use(router).use(VueQueryPlugin).use(pinia).mount("#app");

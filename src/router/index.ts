import { createRouter, createWebHistory } from "vue-router";

import RootPage from "../pages/Root.vue";
import HelloCompositionAPIVue from "../components/HelloCompositionAPI.vue";

export const routes = [
  { path: "/", name: "home", component: RootPage },
  { path: "/composition-api", component: HelloCompositionAPIVue },
];

export const router = createRouter({ history: createWebHistory("/"), routes });

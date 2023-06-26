import { createRouter, createWebHistory } from "vue-router";

import RootPage from "../pages/Root.vue";
import HelloCompositionAPIVue from "../components/HelloCompositionAPI.vue";
import HelloOptionsAPIVue from "../components/HelloOptionsAPI.vue";
import UsersVue from "../pages/Users.vue";

export const routes = [
  { path: "/", name: "home", component: RootPage },
  { path: "/composition-api", component: HelloCompositionAPIVue },
  { path: "/options-api", component: HelloOptionsAPIVue },
  { path: "/users", component: UsersVue },
];

export const router = createRouter({ history: createWebHistory("/"), routes });

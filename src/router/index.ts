import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import RootPage from "../pages/Root.vue";
import HelloCompositionAPIVue from "../components/HelloCompositionAPI.vue";
import HelloOptionsAPIVue from "../components/HelloOptionsAPI.vue";
import DynamicComponentsVue from "../components/DynamicComponents/DynamicComponents.vue";
import UsersVue from "../pages/Users.vue";

import ReactivityVue from "@/pages/reactivity/Reactivity.vue";
import Slots from "@/components/slots/Slots.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: RootPage,
    children: [
      {
        path: "/composition-api",
        component: HelloCompositionAPIVue,
        props: {
          welcomeMsg: "Hello !",
        },
      },
      {
        path: "/dynamic-components-vue",
        component: DynamicComponentsVue,
        props: { className: "text-center" }, // generally this is not common
      },
      { path: "/options-api", component: HelloOptionsAPIVue },
      { path: "/users", component: UsersVue },
      { path: "/reactivity", component: ReactivityVue },
      { path: "/slots", component: Slots },
    ],
  },
];

export const router = createRouter({ history: createWebHistory("/"), routes });

import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import RootPage from "../pages/Root.vue";
import HelloCompositionAPIVue from "../components/HelloCompositionAPI.vue";
import HelloOptionsAPIVue from "../components/HelloOptionsAPI.vue";
import DynamicComponentsVue from "../components/DynamicComponents/DynamicComponents.vue";
import UsersVue from "../pages/Users.vue";

import ReactivityVue from "@/pages/reactivity/Reactivity.vue";
import Slots from "@/components/slots/Slots.vue";
import Computed from "@/pages/computed/Computed.vue";
import Home from "@/pages/Home.vue";
import Watchers from "@/pages/Watchers.vue";
import Stores from "@/pages/stores/Stores.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "root",
    redirect: "/home",
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
      { path: "/computed", component: Computed },
      { path: "/home", component: Home },
      { path: "/watchers", component: Watchers },
      { path: "/stores", component: Stores },
    ],
  },
];

export const router = createRouter({ history: createWebHistory("/"), routes });

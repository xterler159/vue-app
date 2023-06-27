import { createStore } from "vuex";

import users from "./users";
import counter from "./counter";

const store = createStore({
  // getters: {
  //   getCount(state: any) {
  //     return state.count;
  //   },
  // },
  // state() {
  //   return {
  //     count: 0,
  //   };
  // },
  // mutations: {
  //   increment(state: any) {
  //     state.count++;
  //   },
  // },
  modules: {
    users,
    counter,
  },
});

export default store;

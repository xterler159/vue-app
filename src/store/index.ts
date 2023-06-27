import { createStore } from "vuex";

const store = createStore({
  getters: {
    getCount(state: any) {
      return state.count;
    },
  },
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
});

export default store;

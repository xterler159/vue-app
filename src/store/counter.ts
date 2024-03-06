import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref<number>(0);

  // action
  const setIncrementCounter = () => {
    counter.value += 1;
  };

  const setDecrementCounter = () => {
    counter.value -= 1;

    if (counter.value <= 0) {
      counter.value = 0;
    }
  };

  return { counter, setIncrementCounter, setDecrementCounter };
});

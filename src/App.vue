<script setup lang="ts">
import { ref } from "vue";

import HelloOptionsAPI from "./components/HelloOptionsAPI.vue";
import HelloCompositionAPI from "./components/HelloCompositionAPI.vue";
import Counter from "./components/Counter.vue";

const count = ref<number>(0);
</script>

<template>
  <HelloOptionsAPI welcome-msg="hello !!" />
  <HelloCompositionAPI welcome-msg="hey man" />
  <Counter />
</template>

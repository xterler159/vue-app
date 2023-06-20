<script setup lang="ts">
import { ref } from "vue";

import HelloOptionsAPI from "./HelloOptionsAPI.vue";
import HelloCompositionAPI from "./HelloCompositionAPI.vue";
import Counter from "./Counter.vue";

const count = ref<number>(0);
</script>

<template>
  <HelloOptionsAPI welcome-msg="hello !!" />
  <HelloCompositionAPI welcome-msg="hey man" />
  <Counter />
</template>

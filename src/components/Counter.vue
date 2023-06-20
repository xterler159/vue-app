<script setup lang="ts">
import { ref } from "vue";

const count = ref<number>(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <button @click="increment">Count is {{ count }}</button>
  </div>
</template>

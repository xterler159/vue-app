<template>
  <button class="btn btn-primary" @click="testClicker">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface FancyButtonProps {
  onClick: () => void;
}

const props = defineProps<FancyButtonProps>();

const testClicker = () => {
  console.log("testClicker");
};
</script>

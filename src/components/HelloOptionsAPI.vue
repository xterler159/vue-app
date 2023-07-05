<template>
  <div>
    <h1 class="text-center">Hello component, with option API</h1>
    <h2>Props:</h2>
    <code>{{ JSON.stringify($props) }}</code>
  </div>
</template>

<script lang="ts">
import MainLayout from "../layouts/MainLayout.vue";

export default {
  props: {
    welcomeMsg: String,
  },
  setup(props) {
    console.log("<HelloOptionsAPI /> props:", props);
  },
  components: {
    MainLayout,
  },
};
</script>

<template>
  <MainLayout>
    <h1 class="text-center">Users</h1>

    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="increment">Increment {{ store.state.count }}</button>
    </div>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "@/layouts/MainLayout.vue";
import store from "../store/index";

const increment = () => {
  store.commit("increment");
};
</script>

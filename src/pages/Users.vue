<template>
  <p v-if="isLoading">Loading...</p>

  <div v-else class="users-container">
    <h1 class="text-center">Users</h1>

    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="increment">
        Increment {{ storeCounter.counter }}
      </button>
    </div>
    <br />

    <code>{{ store.getters.getCounter() }}</code>
    <br />
    <br />
    <code>{{ data }}</code>
  </div>
</template>

<script lang="ts" setup>
import { onUpdated } from "vue";

import { useUsers } from "@/queries/Users";
import store from "@/store/index";

const storeCounter = store.getters.getCounter();

const { data, isLoading } = useUsers();
let counter = 0;

const increment = () => {
  counter = counter + 1;
  store.commit("increment", counter);
};

onUpdated(() => {
  console.log("updated");
});
</script>

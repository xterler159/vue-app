<template>
  <MainLayout>
    <h1 class="text-center">Users</h1>

    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="increment">Increment {{ store.state.count }}</button>
    </div>
    <br />
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="getUsers">Get users</button>
    </div>

    <code>{{ store.getters.getCounter() }}</code>
    <br />
    <br />
    <code>{{ store.getters.getUsers() }}</code>
  </MainLayout>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, ref } from "vue";

import MainLayout from "../layouts/MainLayout.vue";
import store from "../store/index";
import { get } from "../api/axios";

const usersRef = ref(null);
const counterRef = ref(0);

const increment = () => {
  counterRef.value = counterRef.value + 1;
  store.commit("increment", counterRef.value);
};

const getUsers = () => {
  const value = store.getters.getUsers();
  usersRef.value = value;
};

onMounted(async () => {
  const users = await get("/users");
  store.commit("setUsers", users);
});

onUpdated(() => {
  console.log("onUpdated");
});
</script>

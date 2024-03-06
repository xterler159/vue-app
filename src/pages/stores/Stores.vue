<template>
  <h1>Stores</h1>

  <h2 class="mt-5">Counter store:</h2>
  <button class="btn btn-info" @click="setIncrementCounter">Increment</button>
  {{ counter }}
  <button class="btn btn-warning" @click="setDecrementCounter">Decrement</button>

  <h2 class="mt-5">Users store:</h2>
  <pre>{{ users.slice(0, 1) }}...</pre>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";

import { useCounterStore, useUserStore } from "@/store";
import { useUsers } from "@/queries/users";
// queries
const usersFromQuery = useUsers();
const { data } = usersFromQuery;

// stores
const counterStore = useCounterStore();
const usersStore = useUserStore();

// counter store
const { counter } = storeToRefs(counterStore);
const { setIncrementCounter, setDecrementCounter } = counterStore;

// user store
const { users } = storeToRefs(usersStore);
const { setUsers } = usersStore;

watch(data, () => {
  setUsers(data.value);
});

onMounted(() => {
  setIncrementCounter();
});

// this will work
watch(users, () => {
  console.log("watch users:", users);
});
</script>

<template>
  <h1 class="text-center">Watchers demo</h1>

  <h2>Assignments</h2>
  <ul>
    <li v-for="(assignment, index) in assignments" :key="index">
      <label>{{ assignment.name }}</label>
      <input type="checkbox" v-model="assignment.done" />
    </li>
  </ul>

  <pre>
      {{ assignments }}
    </pre
  >

  <label> User name: <input type="text" placeholder="User name" v-model="userData.name" /> </label>
  <pre>{{ userData }}</pre>

  <label> User age: <input type="number" placeholder="User age" v-model="userAge" /></label>
  <pre>{{ userAge }}</pre>

  <label>
    User address: <input type="text" placeholder="User address" v-model="userAdress"
  /></label>
  <pre>{{ userAdress }}</pre>

  <label>
    User has a job: <input type="checkbox" placeholder="User has a job" v-model="userHasAJob"
  /></label>
  <pre>{{ userHasAJob }}</pre>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const assignments = ref([
  { name: "Finish project", done: false },
  { name: "Read chapter 4", done: false },
  { name: "Turn in homework ", done: true },
]);

const userData = ref({ name: "" });
const userAge = ref(null);
const userAdress = ref("");
const userHasAJob = ref(false);

// this watcher will not be executed.
watch(assignments, () => {
  console.log("watch assignments");
});

// this watcher will BE executed.
// so we need to listen to the .value instead of the whole ref object.
watch(assignments.value, () => {
  console.log("watch assignments.value:", assignments);
});

// same logic. the watcher will work on object ref.
watch(userData.value, () => {
  console.log("watch userData.value:", userData.value);
});

// the watcher will work on a plain object ref (it can be null).
watch(userAge, () => {
  console.log("watch userAge:", userAge);
});

// on a string too.
watch(userAge, () => {
  console.log("watch userAge:", userAge);
});

// on a boolean too.
watch(userHasAJob, () => {
  console.log("watch userHasAJob:", userHasAJob);
});
</script>

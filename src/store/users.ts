import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useUserStore = defineStore("users", () => {
  // state
  const users = ref<any[]>([]);

  // actions
  const setUsers = (data: any[]) => {
    console.log("setUsers data:", data);
    users.value = data;
  };

  watch(users, () => {
    console.log("watch useUserStore users:", users.value);
  });

  // getters
  const getUsers = computed(() => users);

  return { users, getUsers, setUsers };
});

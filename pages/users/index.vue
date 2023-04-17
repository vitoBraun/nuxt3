<script lang="ts">
export default {
  data() {
    return {
      name: "Victor",
      users: [1, 2, 3, 4, 5, 6, 7],
    };
  },
};
</script>

<template>
  <h3>Users</h3>
  {{ name }}
  <div>
    <ul>
      <li v-for="user in users" :key="user">
        <NuxtLink :to="'users/' + user"> user number {{ user }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

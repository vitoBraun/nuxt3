<script setup lang="ts">
import { ref } from "vue";
const { data: api } = await useFetch("/api/hello", {
  method: "post",
  body: { test: 123 },
});
const info = ref(api);
</script>

<template>
  <h3>User {{ $route.params.id }} page</h3>
  some Info of {{ $route.params.id }}

  and its api fetch: {{ info }}
</template>

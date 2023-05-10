<script lang="ts" setup>
import { IPost } from "~/models/Post";
const route = useRoute();
const { data: post } = useFetch<IPost>(`/api/posts/${route.params.id}`);
</script>
<template>
  <v-main v-if="post" class="mx-10 mt-10" color="background" flat>
    {{ post.title }}</v-main
  >
</template>

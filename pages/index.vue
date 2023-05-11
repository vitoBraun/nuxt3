<template>
  <div>
    <title>Название сайта</title>

    <v-main class="mx-10 mt-10" color="background" flat>
      <v-card
        v-for="post in posts"
        :key="post.id"
        class="mb-10 rounded-xl mx-auto"
        elevation="10"
        max-width="840"
        height="230"
        link
        :to="`/posts/${post.id}`"
      >
        <v-img
          :src="`http://localhost:1337${post.attributes.images.data[0].attributes.url}`"
          height="100%"
          cover
          class="text-white"
        >
          <v-card-subtitle class="pt-4 shadowed-text">
            Просмотров: {{ post.attributes.views }}
          </v-card-subtitle>
          <v-card-title class="shadowed-text my-50">{{
            post.attributes.title
          }}</v-card-title>

          <v-card-text class="shadowed-text">{{
            post.attributes.fullText
          }}</v-card-text></v-img
        >
      </v-card>
    </v-main>
    >
  </div>
</template>
<script lang="ts" setup>
import { getData } from "~/utils/api";
const { data } = await useFetch("http://localhost:1337/api/posts?populate=*");
const posts = getData(data);
</script>
<style>
.shadowed-text {
  text-shadow: 0px 0px 20px #000000, 0px 0px 20px #000000, 0px 0px 20px #000000,
    0px 0px 20px #000000;
}
</style>

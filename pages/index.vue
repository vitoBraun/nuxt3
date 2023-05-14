<template>
  <div>
    <title>Название сайта</title>

    <v-main class="mx-10 mt-10" color="background" flat>
      <v-card
        v-for="post in posts"
        :key="post.id"
        class="mb-15 rounded-xl mx-auto"
        elevation="10"
        max-width="840"
        height="230"
        link
        :to="`/posts/${post.id}`"
        style="
          background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 1)
            ),
            url('your-image-url.jpg');
          background-blend-mode: overlay;
        "
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
import usePosts from "~/hooks/posts";
import { IPost } from "~/models/models";
const { posts } as IPost[] = await usePosts();
</script>

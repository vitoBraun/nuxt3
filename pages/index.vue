<template>
  <title>Какое-нибудь название</title>
  <v-card color="background">
    <v-navigation-drawer
      width="300"
      flat
      border="0"
      color="background"
      style="padding-left: 30pt; padding-top: 30px"
    >
      <v-list>
        <v-list-item
          variant="plain"
          v-for="topic in topics"
          :key="topic.id"
          link
          style="font-size: 1.3em"
        >
          {{ topic.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="mx-10 mt-10" color="background" flat>
      <v-card
        v-for="post in posts"
        :key="post.id"
        class="mb-10 rounded-xl mx-auto"
        elevation="10"
        max-width="840"
        height="230"
        link
        :to="`/api/posts/${post.id}`"
      >
        <v-img :src="post.img" height="100%" cover class="text-white">
          <v-card-subtitle class="pt-4 shadowed-text">
            Просмотров 10
          </v-card-subtitle>
          <v-card-title class="shadowed-text my-50">{{
            post.title
          }}</v-card-title>

          <v-card-text class="shadowed-text">{{
            post.content
          }}</v-card-text></v-img
        >
      </v-card>
    </v-main>
    <v-navigation-drawer location="right" flat border="0" color="background">
      <v-list>
        <v-list-item title="Drawer right"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script lang="ts" setup>
const { data: posts } = await useLazyFetch("/api/posts");
const { data: topics } = await useLazyFetch("/api/topics");
</script>

<style scoped>
.app {
  font-family: Inter, Helvetica, Arial, sans-serif;
}
.shadowed-text {
  text-shadow: 0px 0px 20px #000000, 0px 0px 20px #000000, 0px 0px 20px #000000,
    0px 0px 20px #000000;
}
</style>

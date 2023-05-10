<template>
  <v-navigation-drawer
    width="300"
    flat
    border="0"
    color="background"
    style="padding-left: 30pt; padding-top: 30px"
  >
    <v-list v-if="topics">
      <v-list-item
        variant="plain"
        v-for="topic in topics"
        :key="topic.id"
        link
        style="font-size: 1.3em"
      >
        <Icon :name="topic.icon" />
        {{ topic.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ITopic } from "~/models/Topic";

const { data: topics } = await useFetch<ITopic[]>("/api/topics");
</script>

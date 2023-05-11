<template>
  <v-navigation-drawer
    width="350"
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
        style="font-size: 1.2em"
        ><div style="display: flex; justify-content: space-between">
          <v-img
            :src="`http://localhost:1337${topic.attributes.icon.data.attributes.formats.thumbnail.url}`"
            max-height="30"
            style="justify-content: flex-start"
          />
          <div>
            {{ topic.attributes.title }}
          </div>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ITopic } from "~/models/models";

const { data } = await useFetch("http://localhost:1337/api/topics?populate=*");
const topics: ITopic[] = getData(data);
</script>

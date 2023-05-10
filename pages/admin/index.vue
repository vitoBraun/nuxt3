<template>
  <NuxtLayout name="admin">
    <title>Админка</title>

    <v-main class="mx-10 mt-30" color="background" flat>
      <h3>Добавить публикацию</h3>
      <v-form class="col-6 mx-auto" @:submit.prevent>
        <div v-for="field in postFields" v-bind:key="field.label">
          <TextField
            v-if="field.type === 'text'"
            :type="field.type"
            :label="field.label"
          />
          <v-file-input
            v-if="field.type === 'image'"
            :label="field.label"
            prepend-icon="mdi-camera"
          ></v-file-input>
        </div>
        <v-btn @click="submitForm()" variant="tonal" color="green"
          >Добавить</v-btn
        >
      </v-form>
      <Notification v-if="formSent" text="" thesis="Форма отправлена!" />
    </v-main>
  </NuxtLayout>
</template>

<script lang="ts">
import { TextField, Notification } from "./../../components/elements";

export default {
  data() {
    return {
      formData: {},
      formSent: false,
    };
  },
  components: { TextField, Notification },

  methods: {
    async submitForm() {
      const formData = this.formData;
      this.formSent = true;
      await useFetch("/api/items/add", {
        method: "POST",
        body: {
          data: formData,
        },
        onResponse({ request, response, options }) {
          console.log(response);
        },
      });
    },
  },
};
definePageMeta({ layout: "admin" });
</script>

<script setup lang="ts">
const { data: postFields } = await useFetch("/api/admin/post-fields");
</script>

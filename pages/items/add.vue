<template>
  <h3>Добавить товар</h3>

  <v-form v-if="!formSent" class="col-6 mx-auto" @:submit.prevent>
    {{ response }}
    <TextField v-model="name" label="Название" />
    <TextField v-model="surname" label="Описания" />
    <TextField v-model="price" label="Цена" type="number" />
    <button class="btn btn-success my-2" @click="submitForm()">Добавить</button>
    <v-btn @click="submitForm()">Добавить</v-btn>
  </v-form>
</template>

<script lang="ts">
import { useFetch } from "nuxt/app";
export default {
  data() {
    return {
      name: "",
      surname: "",
      price: "",
      response: "",
      formSent: false,
    };
  },
  methods: {
    async submitForm() {
      const formData = {
        name: this.name,
        surname: this.surname,
        price: this.price,
      };
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
</script>

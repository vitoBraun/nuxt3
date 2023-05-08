<template>
  <h3>Добавить товар</h3>

  <v-form v-if="!formSent" class="col-6 mx-auto" @:submit.prevent>
    {{ response }}
    <TextField v-model="name" label="Название" />
    <TextField v-model="surname" label="Описания" />
    <TextField v-model="price" label="Цена" type="number" />
    <v-btn @click="submitForm()" variant="tonal" color="green">Добавить</v-btn>
  </v-form>

  <Notification v-if="formSent" text="" thesis="Форма отправлена!" />
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

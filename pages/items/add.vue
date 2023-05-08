<template>
  <h3>Добавить товар</h3>
  <form class="col-6 mx-auto">
    {{ response }}
    <TextField v-model="name" label="Название" />
    <TextField v-model="surname" label="Описания" />
    <TextField v-model="price" label="Цена" type="number" />
  </form>
  <button class="btn btn-success my-2" @click="check()">Добавить</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      name: "",
      surname: "",
      price: "",
      response: "",
    };
  },
  methods: {
    check() {
      alert("wtf");
    },
    async submitForm() {
      console.log("request");
      await useFetch("/api/items/add", {
        method: "POST",
        body: {
          data: JSON.stringify({
            name: this.name,
            surname: this.surname,
            price: this.price,
          }),
        },
        onResponse({ request, response, options }) {
          console.log(response);
        },
      });
    },
  },
};
</script>

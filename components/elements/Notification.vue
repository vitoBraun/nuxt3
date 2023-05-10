<template>
  <v-sheet
    v-if="isVisible"
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="pa-4 text-center mx-auto"
  >
    <v-icon
      class="mb-5"
      color="success"
      icon="mdi-check-circle"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">{{ thesis }}</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      {{ text }}

      <br />

      Благодарим за пользование сервисом!
    </p>

    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn
        class="text-none"
        color="success"
        rounded
        variant="flat"
        width="90"
        @click="onClose"
      >
        Готово
      </v-btn>
    </div>
  </v-sheet>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  props: {
    thesis: String,
    text: String,
  },
  methods: {
    onClose() {
      this.isVisible = false;
    },
  },
};
</script>

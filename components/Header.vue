<template>
  <v-app-bar
    class="app-bar"
    flat
    style="
      background: rgba(var(--v-theme-background), 0.77);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10.1px);
      -webkit-backdrop-filter: blur(10.1px);
      height: 80px;
    "
  >
    <NuxtLink to="/"><h1 style="margin: auto 30px">IT-TEMA.RU</h1></NuxtLink>
  </v-app-bar>
</template>

<style>
.app-bar {
  background: rgba(0, 0, 0, 0.77);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
}
</style>

<template>
  <v-app color="background">
    <Header /> <LeftMenu /><slot /><RightMenu
  /></v-app>
</template>
<style scoped>
.app {
  font-family: Inter, Helvetica, Arial, sans-serif;
}
</style>

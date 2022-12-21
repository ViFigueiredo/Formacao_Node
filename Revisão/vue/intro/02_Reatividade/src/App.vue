<script>
/* importa os comoponentes de /components */
import ClienteVue from "./components/Cliente.vue";
export default {
  name: "App",
  components: {
    /* exporta para o main.js todos dos componentes importados */ ClienteVue,
    ClienteVue,
  },
};
</script>

<template>
  <div id="app">
    <!-- renderiza o component -->
    <ClienteVue />
  </div>
</template>

<style scoped></style>

<script>
/* importa os comoponentes de /components */
import ClienteVue from "./components/Cliente.vue";
import ProdutoVue from "./components/Produto.vue";
export default {
  name: "App",
  components: {
    /* exporta para o main.js todos dos componentes importados */ ClienteVue,
    ProdutoVue,
  },
};
</script>

<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <!-- renderiza o component -->
    <ClienteVue />

    <hr />

    <h1>Lista de Produtos</h1>
    <!-- renderiza o component -->
    <ProdutoVue />
  </div>
</template>

<style scoped></style>

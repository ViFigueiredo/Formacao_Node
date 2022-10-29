<template>
  <div class="app">
    <h1>Guia Clientes</h1>
    <Cliente />
    <Cliente />
  </div>
  <hr />
  <h4>Lista de Produtos</h4>
  <hr />
  <Produto />
  <Produto />
  <Produto />
</template>

<script>
import Cliente from "./components/Cliente.vue";
import Produto from "./components/Produto.vue";
export default {
  name: "App",
  components: {
    Cliente,
    Produto,
  },
};
</script>

<style></style>

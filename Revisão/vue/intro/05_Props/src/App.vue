<template>
  <div id="app">
    <!-- passando props para os componentes -->
    <!-- testando reatividade -->
    <p><input type="text" v-model="nomeCliente2.nome" /></p>
    <!-- <Cliente :nome="nomeCliente1" email="cliente1@email.com" idade="15" /> -->
    <Cliente :cliente="nomeCliente2" />
    <!-- <Cliente nome="Cliente 3" email="cliente3@email.com" idade="35" /> -->
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";
export default {
  name: "App",
  data() {
    /* passando valores como data binding na prop */
    return {
      nomeCliente1: "Cliente Um",
      nomeCliente2: {
        nome: "Cliente 2",
        email: "cliente2@email.com",
        idade: 25,
      },
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style scoped></style>

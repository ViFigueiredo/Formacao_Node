<template>
  <div class="app">
    <h1>Guia Clientes</h1>
    <!-- props obj recebendo uma prop condicional -->
    <!-- condicional precisa ser bind -->
    <Cliente :cliente="cliente" :showIdade="true" />
    <Cliente :cliente="cliente" />
    <Cliente :cliente="cliente" :showIdade="true" />
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";
export default {
  name: "App",
  data() {
    return {
      cliente: {
        nome: "nome do cliente",
        email: "email_do_cliente@email.com",
        idade: 19,
      },
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style></style>

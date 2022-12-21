<template>
  <!-- Exemplo usando prop object -->
  <div class="app">
    <h1>Guia Clientes</h1>
    <!-- prop obj também aceita v-model -->
    <input type="text" v-model="cliente.nome" />
    <br />
    <br />
    <input type="text" v-model="cliente.email" />
    <br />
    <br />
    <input type="text" v-model="cliente.idade" />

    <hr />

    <!-- props obj -->
    <Cliente :cliente="cliente" />
    <Cliente :cliente="cliente" />
    <Cliente :cliente="cliente" />
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

<template>
  <div class="app">
    <h1>Guia Clientes</h1>

    <div class="vFor" v-for="(cliente, index) in forClientes" :key="cliente.id">
      <!-- <p>Testando v-for</p> -->
      <h4>{{index + 1}}</h4>
      <Cliente :cliente="cliente" />
      <hr>
      <p> Edição: </p>
      <input type="text" v-model="cliente.nome">
      <input type="text" v-model="cliente.email">
    </div>
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";
export default {
  name: "App",
  data() {
    return {
      // cliente: {
      //   nome: "nome do cliente",
      //   email: "email_do_cliente@email.com",
      //   idade: 19,
      // },
      forClientes: [
        {
          id: 1,
          nome: "Vinicius",
          email: "vinicius@email.com",
          idade: 28,
        },
        {
          id: 2,
          nome: "Rebecka",
          email: "rebecka@email.com",
          idade: 24,
        },
        {
          id: 3,
          nome: "Malu",
          email: "malu@email.com",
          idade: 9,
        },
      ],
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style></style>

<template>
  <div id="app">
    <div v-for="(cliente, index) in clientes" :key="cliente.id">
      <h4>{{ index + 1 }}</h4>
      <Cliente :cliente="cliente" showIdade />
      <hr />
      <h4>Edição:</h4>
      <input type="text" v-model="cliente.nome" />
      <input type="text" v-model="cliente.email" />
    </div>
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";
export default {
  name: "App",
  data() {
    return {
      nomeCliente: {
        nome: "Cliente",
        email: "cliente@email.com",
        idade: 25,
      },
      clientes: [
        {
          id: 1,
          nome: "Cliente 1",
          email: "cliente1@email.com",
          idade: 15,
        },
        {
          id: 2,
          nome: "Cliente 2",
          email: "cliente2@email.com",
          idade: 25,
        },
        {
          id: 3,
          nome: "Cliente 3",
          email: "cliente3@email.com",
          idade: 35,
        },
      ],
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style scoped></style>

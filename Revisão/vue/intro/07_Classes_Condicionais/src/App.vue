<template>
  <div id="app">
    <!-- se não for utilizado o data binding, a prop sempre será uma string -->
    <Cliente :cliente="nomeCliente" :showIdade="1" />
    <Cliente :cliente="nomeCliente" :showIdade="0" />
    <Cliente :cliente="nomeCliente" :showIdade="5" />
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
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style scoped></style>

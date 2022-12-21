<template>
  <!-- Exemplo usando data binding como prop + v-model -->
  <div class="app">
    <h1>Guia Clientes</h1>
    <input type="text" v-model="nomeDoCliente" />
    <Cliente :nome="nomeDoCliente" email="outroemail_3@email.com" idade="20" />
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";
export default {
  name: "App",
  data() {
    return {
      nomeDoCliente: "Nome 2", // passando variavel de forma reativa para dentro de outro componente (precisa bindar a prop do componente alvo)
    };
  },
  components: {
    Cliente,
  },
};
</script>

<style></style>

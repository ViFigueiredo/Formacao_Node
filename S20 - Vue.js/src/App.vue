<!-- Componentes
Para renderizar uma componente, basta importá-lo em script informando no export a qual component do app ele pertence
 -->

<!-- Props
Podemos passar props="" como valores dinâmicos de componentes
 -->

<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <input type="text" v-model="clienteObj.nome" />
    <!-- data.objeto também funciona com v-model -->
    <!-- <Cliente propNome="Vinicius Figueiredo" propIdade="28" />
    <Cliente :propNome="apelido" propIdade="24" /> -->

    <!-- sempre que for passado uma prop como js, devemos bindar -->
    <Cliente :cliente="clienteObj" :showIdade="true" />
    <Cliente :cliente="clienteObj" />

    <!-- <Cliente propNome="Davi Izoton" propIdade="10" /> -->
  </div>
</template>

<script>
import Cliente from "./components/Cliente_ex2.vue";
// import Cliente from "./components/Cliente_ex1.vue";
// import Produto from "./components/Produto.vue";
export default {
  name: "App",
  data() {
    return {
      // apelido: "Boca rosa", // variáveis reativas
      clienteObj: {
        nome: "Rafa",
        email: "rafa@email.com",
        idade: 16,
      },
    };
  },
  components: {
    Cliente,
    // Produto,
  },
};
</script>

<!-- scoped - apenas para esse componente(arquivo) -->
<style scoped></style>

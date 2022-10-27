<!-- Componentes
Para renderizar uma componente, basta importá-lo em script informando no export a qual component do app ele pertence
 -->

<!-- Props
Podemos passar props="" como valores dinâmicos de componentes
 -->

<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <Cliente propNome="Vinicius Figueiredo" propIdade="28" />
    <Cliente :propNome="apelido" propIdade="24" />
    <Cliente propNome="Rafael Prezotti" propIdade="16" />
    <Cliente propNome="Davi Izoton" propIdade="10" />
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";
// import Produto from "./components/Produto.vue";
export default {
  name: "App",
  data() {
    return {
      apelido: "Boca rosa", // variáveis reativas
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

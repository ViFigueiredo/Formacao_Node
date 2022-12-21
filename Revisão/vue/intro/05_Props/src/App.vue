<template>
  <div id="app">
    <!-- testando reatividade alterando o valor de props utilizando two way data binding -->
    <!-- <p><input type="text" v-model="email"/></p> -->

    <!-- renderiza o component -->
    <!-- passando valores para as props do component cliente -->
    <Cliente nome="Vinicius Figueiredo" email="email@email.com" idade="29"/>

    <!-- passando valores de props como objeto -->
    <Cliente :cliente="clienteObj"/>
  </div>
</template>

<script>
/* importa os comoponentes de /components */
import Cliente from "./components/Cliente.vue";
export default {
  name: "App",
  data(){
    return {
      email: "nome.sobrenome@email.com",
      clienteObj: {
        nome: "Lucas Chabude",
        email: "lucas.chabude@email.com",
        idade: 23
      }
    }
  },
  components: {
    /* exporta para o main.js todos dos componentes importados */
    Cliente,
    Cliente,
  },
};
</script>

<style scoped></style>

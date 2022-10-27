<!-- Estrutura Básica 
Um componente raiz só pode ter uma tag filha, de outro modo, devemos envolver tudo em uma tag <div>
-->

<!-- Reatividade
Toda vez que que um dado muda, todas suas referências também mudam.
 -->

<template>
  <div id="cliente">
    <h2 id="cliente-nome">{{ propNome }}</h2>
    <hr />
    <p>Descrição do cliente: {{ descricao }}</p>
    <hr />
    <!-- {{ 2 + 2 * 2 + 2 }} reatividade/interpolação-->

    <span>Idade: </span>
    <input type="number" :value="propIdade" />

    <br /><br />

    <!-- data binding(one way - leitura(apenas ela sofre reatividade)) - uso de variaveis em tags -->
    <span>Número 1: </span>
    <input type="text" :value="numero" />

    <br /><br />

    <!-- data binding(two way - escrita(encadeia reatividade)) - uso de variaveis em tags -->
    <span>Número 2: </span>
    <input type="text" v-model="numero" />

    <br /><br />

    <span>E-mail: </span>
    <input type="text" :value="email" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // nome: "Vinicius Figueiredo", <- substituido pela props
      descricao: "Lorem ipsum Lorem ipsum",
      // idade: 28, <- substituido pela props
      numero: "99 9999-9999",
      email: "email@email.com",
    };
  },
  props: {
    // valores dinâmicos para componentes
    propNome: String,
    propIdade: String,
  },
};
</script>

<style scoped>
#cliente {
  background-color: #ece5e3;
  max-width: 600px;
  padding: 1%;
  margin-bottom: 2%;
}
</style>

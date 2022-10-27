<!-- Estrutura Básica 
Um componente raiz só pode ter uma tag filha, de outro modo, devemos envolver tudo em uma tag <div>
-->

<!-- Reatividade
Toda vez que que um dado muda, todas suas referências também mudam.
 -->

<template>
  <div id="cliente">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr />
    <p>E-mail: {{ cliente.email }}</p>

    <!-- bloco de condicionais -->
    <p v-if="showIdade">Idade: {{ cliente.idade }}</p>
    <p v-else>O usuário escondeu sua idade.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    // valores dinâmicos para componentes
    cliente: Object,
    showIdade: Boolean,
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

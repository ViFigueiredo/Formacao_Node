<template>
  <!-- div: para mais de um elemento no template -->
  <div id="cliente">
    <!-- {{}} interpolação: expressões js que retornam algum valor -->
    <h2 id="cliente-nome">{{ nome }}</h2>
    <h3>Descrição do cliente: {{ descricao }}</h3>
  </div>
</template>

<!-- Reatividade: toda vez que um dado muda, todas suas referências mudam (reação) -->

<script>
export default {
  data() {
    return {
      nome: "Vinicius Figueiredo",
      idade: 29,
      numero: "99 9999-9999",
      email: "email@email.com",
      descricao: "Uma breve descrição do cliente...",
    };
  },
};
</script>

<!-- scoped: apenas neste componente -->
<style scoped>
#cliente {
  max-width: 600px;
  height: 200px;
}
</style>

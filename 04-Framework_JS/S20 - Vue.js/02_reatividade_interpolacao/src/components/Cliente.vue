<template>
  <!-- Reatividade
Sempre que o dado muda, suas referências mudam.
 -->

  <div id="cliente">
    <h2 id="cliente-nome">{{ nome }}</h2>
    <h3>Descrição cliente:{{ descricao }}</h3>

    <!-- interpolação -->
    <!-- {{ 2 + 2 + 2 }} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "Vinicius Figueiredo",
      numero: "",
      email: "",
      idade: 0,
      descricao: "Uma descrição qualquer.",
    };
  },
};
</script>

<style scoped>
/* scoped -> apenas este arquivo */
#cliente {
  max-width: 300px;
  max-height: 120px;
}
</style>

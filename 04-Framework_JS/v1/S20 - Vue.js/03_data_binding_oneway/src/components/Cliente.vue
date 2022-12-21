<template>
  <!-- Data Binding(one way)
  
O dado muda mas não interfere em suas referências. Serve apenas para leitura.

:value=""

 -->

  <div id="cliente">
    <input type="text" :value="nome" />
    <hr />
    <input type="text" :value="descricao" />
    <hr />
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

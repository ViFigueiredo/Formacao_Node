<template>
  <div id="cliente">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr />
    <p>E-mail: {{ cliente.email }}</p>
    <p>Idade: {{ cliente.idade }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // nome: "Vinicius Figueiredo",
      // email: "email@email.com",
      // idade: 29,
    };
  },
  props: {
    /* data() e props devem ter variaveis diferentes */
    nome: String,
    email: String,
    idade: Number,
    cliente: Object,
  },
};
</script>

<style scoped>
#cliente {
  margin-bottom: 2%;
  padding: 2%;
  background-color: #ccc;
  max-width: 70%;
}
</style>

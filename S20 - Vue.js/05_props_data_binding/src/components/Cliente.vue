<template>
  <div id="cliente">
    <h4>Nome: {{ nome }}</h4>
    <hr />
    <p>E-mail: {{ email }}</p>
    <p>Idade: {{ idade }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // nome: "Vinicius Figueiredo",
      // email: "email@email.com",
      // idade: 28,
    };
  },
  props: {
    nome: String,
    email: String,
    idade: Number,
  },
};
</script>

<style scoped>
/* scoped -> apenas este arquivo */
#cliente {
  background: rgb(191, 161, 161);
  max-width: 400px;
  padding: 1%;
  margin-bottom: 2%;
}
</style>

<template>
  <!-- div: para mais de um elemento no template -->
  <div id="cliente">
    <!-- alterando a interpolacao para obj  -->
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr>
    <p>Email: {{ cliente.email }}</p>
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
  props: { /* definindo o tipo das props de um componente (não pode ser utilizado em conjunto com data())  */
      nome: String,
      email: String,
      idade: String,

      /* em casos de muitas props, utilizamos obj como valores de props no componente pai */
      cliente: Object
  }
};
</script>

<!-- scoped: apenas neste componente -->
<style scoped>
#cliente {
  margin-bottom: 2%;
  padding: 1% 2rem;
  background-color: #ccc;
  max-width: 70%;
}
</style>

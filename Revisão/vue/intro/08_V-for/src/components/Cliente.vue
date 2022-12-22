<template>
  <div :class="{ 'cliente': !isPremium, 'cliente-premium': isPremium }">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr />
    <p>E-mail: {{ cliente.email }}</p>
    <p v-if="showIdade">Idade: {{ cliente.idade }}</p>
    <p v-else>Escondeu a idade!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPremium: false,
    };
  },
  props: {
    cliente: Object,
    showIdade: Boolean,
    // showIdade: Number,
  },
};
</script>

<style scoped>
.cliente {
  margin-bottom: 2%;
  padding: 2%;
  background-color: #ccc;
  max-width: 70%;
}

.cliente-premium {
  margin-bottom: 2%;
  padding: 2%;
  background-color: black;
  color: goldenrod;
  max-width: 70%;
}
</style>

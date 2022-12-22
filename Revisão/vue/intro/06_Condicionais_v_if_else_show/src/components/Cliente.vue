<template>
  <div id="cliente">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr />
    <p>E-mail: {{ cliente.email }}</p>
    <!-- não deleta o elemento em caso de false -->
    <!-- <p v-show="showIdade == true">Idade: {{ cliente.idade }}</p> -->
    <!-- deleta o elemento em caso de false -->
    <p v-if="showIdade == 1">Idade: {{ cliente.idade }}</p>
    <!-- se conecta com o v-if mais próximo / não funciona com v-show -->
    <!-- <p v-else>Escondeu a idade!</p> -->
    <p v-else-if="showIdade <= 0">Escondeu a idade!</p>
    <p v-else-if="showIdade + 2 > 5">Sistema está louco!</p>
  </div>
</template>

<script>
export default {
  props: {
    cliente: Object,
    // showIdade: Boolean,
    showIdade: Number,
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

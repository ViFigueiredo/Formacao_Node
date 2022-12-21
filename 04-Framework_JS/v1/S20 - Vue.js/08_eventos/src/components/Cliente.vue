<template>
  <!-- classes com condicionais + if/else -->
  <div :class="{ cliente: !isPremium, clientePremium: isPremium }">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr />
    <p>E-mail: {{ cliente.email }}</p>
    <p v-if="showIdade">Idade: {{ cliente.idade }}</p>

    <!-- v-else entende o último v-if utilizado / não renderiza no DOM -->
    <p v-else>O usuário escondeu sua idade.</p>

    <!-- v-show entende o último v-if utilizado / renderiza no DOM -->
    <!-- <p v-show>O usuário escondeu sua idade.</p> -->

    <!-- v-else-if entende o último v-if utilizado / não renderiza no DOM -->
    <!-- <p v-else-if="showIdade === false">Um bloco de else-if.</p> -->

    <button @click="mudarCor($event)">Mudar cor!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPremium: true,
    };
  },
  props: {
    cliente: Object,
    showIdade: Boolean,
  },
  methods: {
    mudarCor: function ($event) {
      // console.log("Chamando evento!");
      console.log($event);
      this.isPremium = !this.isPremium; // sempre utilizar this quando referenciar dados dentro de um componente
    },
  },
};
</script>

<style scoped>
/* scoped -> apenas este arquivo */
.cliente {
  background: rgb(191, 161, 161);
  max-width: 400px;
  padding: 1%;
  margin-bottom: 2%;
}

.clientePremium {
  background: rgb(7, 7, 7);
  color: yellow;
  max-width: 400px;
  padding: 1%;
  margin-bottom: 2%;
}
</style>

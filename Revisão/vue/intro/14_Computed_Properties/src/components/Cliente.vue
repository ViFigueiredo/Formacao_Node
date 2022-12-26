<template>
  <div :class="{ cliente: !isPremium, 'cliente-premium': isPremium }">
    <h4>Nome: {{ cliente.nome }}</h4>
    <hr />

    <!-- descontinuado -->
    <!-- <p>E-mail: {{ cliente.email | processarEmail }}</p> -->

    <!-- computed(filter) -->
    <p>E-mail: {{ processarEmail }}</p>

    <p v-if="showIdade">Idade: {{ cliente.idade }}</p>
    <p v-else>Escondeu a idade!</p>
    <button @click="mudarCor($event)">Mudar cor!</button>
    <button @click="emitirEventoDelete($event)">Deletar!</button>
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
  },
  methods: {
    mudarCor: function ($event) {
      // console.log('CHAMANDO EVENTO!');
      console.log($event);

      /* this -> refere-se ao data() do proprio componente */
      this.isPremium = !this.isPremium;
    },
    emitirEventoDelete: function () {
      console.log('Emitindo do filho!');

      /* emite um evento escutavel pelo componente pai */
      this.$emit('meDelete', { component: this, idDoCliente: this.cliente.id });
    },
    testar: function () {
      console.log('Testando para valer...');
      alert('Isso é um alert!');
    },
  },
  /* descontinuado */
  // filters: {
  //   processarEmail: function (value) {
  //     return value.toUpperCase();
  //   },
  computed: {
    processarEmail() {
      /* altera somente o frontend... não altera o dado a ser salvo no backend */
      return 'EXEMPLO' + this.cliente.email.toUpperCase();
    },
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

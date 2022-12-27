<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <br />
    <input type="text" name="email" id="email" placeholder="Seu e-mail..." />
    <br />
    <input type="text" name="nome" id="nome" placeholder="Seu nome..." />
    <br />
    <button>Teste!</button>
    <h4>{{ parametroRota }}</h4>
  </div>
</template>

<script>
export default {
  created() {
    console.log('Testando...');

    /* capturando parametro da rota */
    console.log(this.$route.params.dado);
    this.parametroRota = this.$route.params.dado;
  },
  data() {
    return {
      parametroRota: 'Nada',
    };
  },
};
</script>

<style scoped></style>

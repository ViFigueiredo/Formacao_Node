<template>
  <div id="app">
    <h3>Cadastro:</h3>
    <input type="text" placeholder="nome" v-model="nomeField" /> <br />
    <input type="email" placeholder="email" v-model="emailField" /> <br />
    <input type="number" placeholder="idade" v-model="idadeField" /> <br />
    <button @click="cadastrarUsuario">Cadastrar</button>
    <hr />

    <div v-for="cliente in clientes" :key="cliente.id">
      <Cliente :cliente="cliente" showIdade />
    </div>
  </div>
</template>

<script>
import Cliente from './components/Cliente.vue';
export default {
  name: 'App',
  data() {
    return {
      nomeField: '',
      emailField: '',
      idadeField: 0,
      clientes: [],
    };
  },
  components: {
    Cliente,
  },
  methods: {
    cadastrarUsuario: function () {
      this.clientes.push({
        id: Date.now() /* data atual em milissegundos */,
        nome: this.nomeField,
        email: this.emailField,
        idade: this.idadeField,
      });
      (this.nomeField = ''), (this.emailField = ''), (this.idadeField = '');
    },
  },
};
</script>

<style scoped></style>

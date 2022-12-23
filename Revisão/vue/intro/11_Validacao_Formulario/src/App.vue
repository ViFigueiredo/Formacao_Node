<template>
  <div id="app">
    <h3>Cadastro:</h3>
    <small id="nomeErro" v-show="deuErro">Nome inserido incorretamente!</small>
    <br />
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
      deuErro: false,
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
      if (
        this.nomeField == '' ||
        this.nomeField == ' ' ||
        this.nomeField.length < 3
      ) {
        this.deuErro = true,
        console.log('Erro de validação!');
      } else {
        this.clientes.push({
          id: Date.now() /* data atual em milissegundos */,
          nome: this.nomeField,
          email: this.emailField,
          idade: this.idadeField,
        });
      }
      (this.nomeField = ''), (this.emailField = ''), (this.idadeField = '');
      this.deuErro = true;
    },
  },
};
</script>

<style scoped>
#nomeErro {
  color: red;
  font-weight: bold;
}
</style>

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

    <div v-for="cliente in orderClientes" :key="cliente.id">
      <!-- @meDelete é um evento escutado no componente filho -->
      <!-- $event é um parametro reservado que devolve todos os dados do component (opcional) -->
      <Cliente
        :cliente="cliente"
        showIdade
        @meDelete="deletarUsuario($event)"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Cliente from './components/Cliente.vue';
export default {
  name: 'App',
  data() {
    return {
      deuErro: false,
      nomeField: '',
      emailField: '',
      idadeField: 0,
      clientes: [
        // {
        //   id: Date.now() /* data atual em milissegundos */,
        //   nome: 'Cliente 1',
        //   email: 'cliente1@email.com',
        //   idade: 66,
        // },
      ],
    };
  },
  components: {
    Cliente,
  },
  methods: {
    cadastrarUsuario: function () {
      if (this.nomeField == undefined || this.nomeField.length < 3) {
        this.deuErro = true;
        console.log('Erro de validação!');
      } else {
        this.clientes.push({
          id: Date.now() /* data atual em milissegundos */,
          nome: this.nomeField,
          email: this.emailField,
          idade: this.idadeField,
        });
        (this.nomeField = ''),
          (this.emailField = ''),
          (this.idadeField = ''),
          (this.deuErro = false);
      }
    },
    deletarUsuario: function ($event) {
      console.log('Recebendo evento do elemento filho!');
      console.log($event);

      /* alterando atributos de um component pelo evento */
      // $event.component.isPremium = true;

      /* capturando ID do component pelo evento */
      console.log('ID: ' + $event.idDoCliente);

      /* chamando um método dentro de outro método do componente filho */
      // $event.component.testar()

      /* captura o id do elemento de um componente filho */
      var id = $event.idDoCliente;
      /* armazena elementos que não passaram na condição inicial em um novo array  */
      var novoArray = this.clientes.filter((cliente) => cliente.id != id);
      /* substitui o array antigo pelo novo */
      this.clientes = novoArray;
    },
  },
  computed: {
    orderClientes: function () {
      /* ordenaos elementos do array utilizando f(lodash) */
      return _.orderBy(this.clientes, ['nome'], ['asc']);
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

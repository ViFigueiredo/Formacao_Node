<template>
  <div class="app">
    <h1>Cadastro:</h1>
    <small id="nomeErro" v-show="deuErro"
      >O nome é inválido, tente novamente!</small
    ><br />
    <input type="text" placeholder="Nome:" v-model="nomeField" /> <br />
    <input type="text" placeholder="E-mail:" v-model="emailField" /> <br />
    <input type="number" placeholder="Idade:" v-model="idadeField" /> <br />
    <button @click="cadastrarUsuario">Cadastrar</button>
    <hr />

    <div class="vFor" v-for="(cliente, index) in clientes" :key="cliente.id">
      <!-- <p>Testando v-for</p> -->
      <h4>{{ index + 1 }}</h4>
      <Cliente :cliente="cliente" @meDelete="deletarCliente" />
    </div>
  </div>
</template>

<script>
import Cliente from "./components/Cliente.vue";
export default {
  name: "App",
  data() {
    return {
      deuErro: false,
      nomeField: "",
      emailField: "",
      idadeField: 0,
      clientes: [],
    };
  },
  components: {
    Cliente,
  },
  methods: {
    cadastrarUsuario: function () {
      // validar campo nome vazio
      if (
        this.nomeField == "" ||
        this.nomeField == " " ||
        this.nomeField.length < 3
      ) {
        console.log("Erro de validação!");
        this.deuErro = true;
      } else {
        this.clientes.push({
          nome: this.nomeField,
          email: this.emailField,
          idade: this.idadeField,
          id: Date.now(),
        });
        this.nomeField = "";
        this.emailField = "";
        this.idadeField = 0;
        this.deuErro = false;
      }
    },
    deletarCliente: function ($event) {
      console.log("Recebendo evento no elemento pai.");
      console.log($event);
      $event.component.isPremium = false;
      console.log($event.idDoCliente);
      $event.component.testar();

      var id = $event.idDoCliente;
      var novoArray = this.clientes.filter((cliente) => cliente.id != id);
      this.clientes = novoArray;
    },
  },
};
</script>

<style>
#nomeErro {
  color: red;
}
</style>

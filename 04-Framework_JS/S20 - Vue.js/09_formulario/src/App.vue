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

    <div class="vFor" v-for="(cliente, index) in Clientes" :key="cliente.id">
      <!-- <p>Testando v-for</p> -->
      <h4>{{ index + 1 }}</h4>
      <Cliente :cliente="cliente" />
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
      Clientes: [],
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
        // console.log("Erro de validação!");
        this.deuErro = true;
      } else {
        this.Clientes.push({
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
  },
};
</script>

<style>
#nomeErro {
  color: red;
}
</style>

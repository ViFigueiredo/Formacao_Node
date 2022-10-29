<template>
  <div id="app">
    <div class="logo-container">
      <img class="logo" src="./assets/img/logo.svg" alt="" />
    </div>
    <div class="column is-half is-offset-one-quarter">
      <div class="search-bar">
        <input
          type="text"
          class="input is-rounded"
          placeholder="Buscar Pokémon pelo nome:"
          v-model="busca"
        />
        <button class="button is-warning is-rounded" @click="buscar">
          Buscar
        </button>
      </div>
      <hr />

      <!-- sem barra de busca -->
      <!-- <div v-for="(poke, index) in pokemons" :key="index"> -->
      <!-- com barra de busca -->
      <!-- <div v-for="(poke, index) in resultadoBusca" :key="index"> -->
      <div v-for="(poke, index) in filteredPokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Pokemon from "./components/Pokemon.vue";

export default {
  // retorna um obj
  data() {
    return {
      pokemons: [],
      busca: "",
      filteredPokemons: [],
    };
  },
  // executa em todo load de página
  created: function () {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        console.log("Pegou a lista de pokemons.");
        this.pokemons = res.data.results;
        this.filteredPokemons = res.data.results;
      });
  },
  components: {
    Pokemon,
  },
  methods: {
    buscar: function () {
      this.filteredPokemons = this.pokemons;
      if (this.busca == "" || this.busca == " ") {
        this.filteredPokemons = this.pokemons;
      } else {
        this.filteredPokemons = this.pokemons.filter(
          (pokemon) => pokemon.name.toLowerCase() == this.busca.toLowerCase()
        );
        // this.filteredPokemons = this.pokemons.filter(
        //   (pokemon) => pokemon.name == this.busca
        // );
      }
    },
  },
  computed: {
    // resultadoBusca: function () {
    //   if (this.busca == "" || this.busca == " ") {
    //     return this.pokemons;
    //   } else {
    //     return this.pokemons.filter((pokemon) => pokemon.name == this.busca);
    //   }
    // },
  },
};
</script>

<style>
.logo-container {
  background: #ccc;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 0;
  margin-bottom: 20px;
}

.logo {
  max-width: 300px;
}

.search-bar {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.search-bar input {
  width: 75%;
}

.search-bar button {
  width: 20%;
}
</style>

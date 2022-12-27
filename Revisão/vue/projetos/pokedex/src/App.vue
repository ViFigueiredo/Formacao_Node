<template>
  <div id="app">
    <div class="logo has-text-centered">
      <img src="./assets/img/Pokédex_logo.png" alt="" />
    </div>

    <div class="column is-half is-offset-one-quarter">
      <div class="pesquisa columns">
        <input
          class="input"
          type="text"
          placeholder="Buscar pokemon..."
          v-model="busca"
        />

        <button class="button is-success" id="buscaBtn" @click="buscar">
          <strong>Buscar</strong>
        </button>
      </div>

      <!-- alteramos o array[pokemons] para a computed{resultadoBusca} para uma busca dinamica -->
      <!-- alteramos o array[pokemons] para a method{filteredPokemons} para uma busca por botão -->
      <!-- BUG: index não atualiza o componente -> trocado por  -->
      <div
        class="poke"
        v-for="(poke, index) in filteredPokemons"
        :key="poke.name"
      >
        <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from './components/pokemon.vue';
export default {
  name: 'App',
  data() {
    return {
      pokemons: [],
      busca: '',
      filteredPokemons: [],
    };
  },

  /* executa quando a pg é carregada */
  created: function () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((response) => {
        // console.log('Pegando a lista de pokemons...');
        this.pokemons = response.data.results;
        // console.log(this.pokemons);
        this.filteredPokemons = response.data.results;
      });
  },
  components: {
    Pokemon,
  },
  methods: {
    buscar: function () {
      this.filteredPokemons = this.pokemons;
      if (this.busca == undefined || this.busca == '' || this.busca == ' ') {
        this.filteredPokemons = this.pokemons;
      } else {
        this.filteredPokemons = this.pokemons.filter(
          (pokemon) => pokemon.name == this.busca,
        );
      }
    },
  },
  computed: {
    // resultadoBusca: function () {
    //   if (this.busca == undefined || this.busca == '' || this.busca == ' ') {
    //     return this.pokemons;
    //   } else {
    //     return this.pokemons.filter((pokemon) => pokemon.name == this.busca);
    //   }
    // },
  },
};
</script>

<style scoped>
#app {
  background-color: #263238;
  padding-top: 2%;
}

.logo img {
  width: 30vw;
}

.pesquisa {
  margin-top: 2rem;
}

.pesquisa input {
  margin-right: 1rem;
}
</style>

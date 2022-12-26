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

        <button class="button is-success">
          <strong>Buscar</strong>
        </button>
      </div>

      <div class="poke" v-for="(poke, index) in pokemons" :key="index">
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
      });
  },
  components: {
    Pokemon,
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

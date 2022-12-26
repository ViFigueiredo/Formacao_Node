<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
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
/* #app {
  margin-top: 3rem;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
</style>

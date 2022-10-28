<template>
  <div id="app">
    <div class="column is-full">
      <div v-for="(poke, index) in pokemons" :key="index">
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
    };
  },
  // executa em todo load de página
  created: function () {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        console.log("Pegou a lista de pokemons.");
        this.pokemons = res.data.results;
      });
  },
  components: {
    Pokemon,
  },
};
</script>

<style></style>

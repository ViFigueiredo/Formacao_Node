<template>
  <div id="app"></div>
</template>

<script>
import axios from "axios";
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
};
</script>

<style></style>

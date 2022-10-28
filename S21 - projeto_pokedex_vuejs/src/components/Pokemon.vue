<template>
  <div>
    <h1>{{ num }} {{ nomePokemonPriMaisc }}</h1>
    <small>{{ url }}</small>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function () {
    axios.get(this.url).then((res) => {
      this.pokemon.type = res.data.types[0].type.name;
      this.pokemon.front = res.data.sprites.front_default;
      this.pokemon.back = res.data.sprites.back_default;
    });
  },
  data() {
    return {
      pokemon: {},
    };
  },
  props: {
    num: Number,
    name: String,
    url: String,
  },
  computed: {
    nomePokemonPriMaisc() {
      var newName = this.name[0].toUpperCase() + this.name.slice(1);
      return newName;
    },
  },
};
</script>

<style></style>

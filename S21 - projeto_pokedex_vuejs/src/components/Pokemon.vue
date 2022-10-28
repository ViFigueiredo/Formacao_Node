<template>
  <div id="pokemon">
    <div class="card has-text-centered">
      <div class="card-image">
        <figure>
          <img :src="pokemon.front" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ num }} - {{ nomePokemonPriMaisc }}</p>
            <p class="subtitle is-6">{{ pokemon.type }}</p>
          </div>
        </div>

        <div class="content"></div>
      </div>
    </div>
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
      pokemon: {
        type: "",
        front: "",
        back: "",
      },
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

<style>
#pokemon {
  margin-bottom: 2%;
}
</style>

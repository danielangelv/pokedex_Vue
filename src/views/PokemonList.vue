<template>
  <div class="bg-black">
    <div class="p-6">
      <h1 class="text-5xl font-extrabold text-center mb-6 text-red-500 tracking-wider font-playfair text-shadow">POKEDEX</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <pokemon-card
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
          class="transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  components: {
    PokemonCard,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  async mounted() {
    await this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        this.pokemons = response.data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.pokemon-card {
  background-color: #303030;
  border: 2px solid #ffffff;
  color: #ffffff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

.pokemon-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.pokemon-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

.pokemon-card:hover .pokemon-image {
  filter: none;
}

.pokemon-name {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.font-roboto {
  font-family: 'Roboto', sans-serif;
}

.text-shadow {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}
</style>



  
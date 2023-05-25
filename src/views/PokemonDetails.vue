<template>
  <div v-if="isLoggedIn" class="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
    <div class="pokedex bg-gray-700 rounded-lg shadow-md">
      <div class="pokedex-screen bg-gray-800 p-6 rounded-t-lg">
        <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="pokemon.name" class="pokemon-image mx-auto" />
      </div>
      <div class="pokedex-info p-6">
        <div class="pokeball-container">
          <div class="pokeball pokeball-left"></div>
          <div class="pokeball pokeball-right"></div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold text-black uppercase">{{ pokemon.name }}</h1>
          <p class="text-base text-black">#{{ pokemon.id }}</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-6">
          <div v-for="property in properties" :key="property.label" class="flex flex-col items-center">
            <p class="text-sm font-bold text-black">{{ property.label }}</p>
            <p class="text-base text-black">{{ property.value }}</p>
          </div>
        </div>

        <!-- Botón de regresar -->
        <button @click="goBack" class="back-button bg-red-600 text-white font-bold py-2 px-4 rounded-full mt-8">
          Regresar
        </button>
      </div>
    </div>
  </div>
  
  <div v-else>
    <h2>Debes iniciar sesión para ver las características del Pokémon</h2>
    <router-link to="/login">Iniciar sesión</router-link>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';


export default {
  name: 'PokemonDetails',
  computed: {
    store() {
      return useStore();
    },
    isLoggedIn() {
      return computed(() => this.store.state.isLoggedIn);
    },
  },
};
</script>

<style scoped>
.pokedex {
  width: 500px;
}

.pokedex-screen {
  border: 6px solid #333;
  height: 300px;
}

.pokemon-image {
  width: 250px;
  height: 250px;
}

.pokedex-info {
  background-color: #fff;
  border: 4px solid #333;
  border-top: none;
}

.back-button {
  background-color: #ff4d4d;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 999px;
  margin-top: 20px;
}

.pokeball-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.pokeball {
  width: 30px;
  height: 30px;
  background-image: url("../assets/pokebola.png");
  background-size: cover;
}

.pokeball-left {
  background-position: right;
}

.pokeball-right {
  background-position: left;
}
</style>


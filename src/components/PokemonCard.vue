<template>
  <div class="pokemon-card bg-gray-800 rounded-lg p-4 cursor-pointer transition-transform transform-gpu hover:scale-105" @click="navigateToDetails">
    <img :src="pokemon.image" :alt="pokemon.name" class="pokemon-image w-32 h-32 mx-auto rounded-lg shadow-md" />
    <h3 class="pokemon-name mt-2 text-white text-center font-bold text-lg tracking-wide">{{ pokemon.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ['pokemon'],
  methods: {
    navigateToDetails() {
      this.$router.push({ path: `/pokemon/${this.pokemon.id}`, query: { details: JSON.stringify(this.pokemon) } });
    },
  },
};
</script>

<style scoped>
</style>

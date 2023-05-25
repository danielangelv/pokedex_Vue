<template>
  <div class="flex items-center justify-center h-screen bg-black">
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div class="px-6 py-8">
        <h1 class="text-4xl font-bold mb-8 text-center text-red-500">¡Bienvenido!</h1>
        <form @submit="login">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Usuario:</label>
            <input type="text" id="username" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
            <input type="password" id="password" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Iniciar sesión</button>
            <router-link to="/register" class="text-red-500 hover:text-red-700 font-bold">Registrarse</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    store() {
      return useStore();
    },
    isLoggedIn() {
      return computed(() => this.store.state.isLoggedIn);
    },
  },
  methods: {
    login() {
      // Realizar validación de usuario y contraseña
      // Enviar solicitud al servidor para verificar la autenticidad de las credenciales

      // Si las credenciales son válidas, iniciar sesión y actualizar el estado de Vuex
      this.store.commit('login');
      this.$router.push(`/pokemon/${this.$route.params.id}`);
    },
  },
};
</script>

  
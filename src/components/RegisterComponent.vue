<template>
  <div class="flex items-center justify-center h-screen bg-black">
    <div class="max-w-2xl rounded overflow-hidden shadow-lg bg-white">
      <div class="px-6 py-8">
        <h1 class="text-4xl font-bold mb-8 text-center text-red-500">¡Registrarse!</h1>
        <form @submit="register">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Usuario:</label>
            <input type="text" id="username" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
            <input type="password" id="password" v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
            <input type="text" id="name" v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="age" class="block text-gray-700 text-sm font-bold mb-2">Edad:</label>
            <input type="number" id="age" v-model="age" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-6">
            <label for="country" class="block text-gray-700 text-sm font-bold mb-2">País:</label>
            <input type="text" id="country" v-model="country" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrarse</button>
            <router-link to="/login" class="text-red-500 hover:text-red-700 font-bold">Iniciar sesión</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/assets/db';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      username: '',
      password: '',
      name: '',
      age: null,
      country: '',
    };
  },
  methods: {
    register() {
      // Validar que los campos no estén vacíos
      if (!this.username || !this.password || !this.name || !this.age || !this.country) {
        // Mostrar un mensaje de error o realizar alguna acción adicional según tus necesidades
        return;
      }

      // Insertar los datos de registro en la base de datos
      const sql = 'INSERT INTO users (username, password, name, age, country) VALUES (?, ?, ?, ?, ?)';
      const values = [this.username, this.password, this.name, this.age, this.country];

      db.run(sql, values, (err) => {
        if (err) {
          // Manejar el error de inserción en la base de datos
          console.error(err);
          // Mostrar un mensaje de error o realizar alguna acción adicional según tus necesidades
        } else {
          // Redirigir al usuario a la página de inicio de sesión después de completar el registro
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>




  
  
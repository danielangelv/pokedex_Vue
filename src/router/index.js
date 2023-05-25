import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';
import PokemonList from '@/views/PokemonList.vue';
import PokemonDetails from '@/views/PokemonDetails.vue';
import LoginComponent from '@/components/LoginComponent.vue';
import RegisterComponent from '@/components/RegisterComponent.vue';

const routes = [
  {
    path: '/',
    name: 'PokemonList',
    component: PokemonList,
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetails',
    component: PokemonDetails,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'LoginComponent',
    component: LoginComponent,
  },
  {
    path: '/register',
    name: 'RegisterComponent',
    component: RegisterComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { meta } = to;
  const store = useStore();
  const isLoggedIn = store.state.isLoggedIn;

  if (meta.requiresAuth && !isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;



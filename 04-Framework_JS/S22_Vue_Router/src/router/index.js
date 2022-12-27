import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Cadastro from '../views/Cadastro.vue';
import Nested from '../views/Nested.vue';
import Nested2 from '../views/Nested2.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/cadastro',
      name: 'cadastro-form' /* cadastro form - utilizando parametros de rotas */,
      component: Cadastro,
    },
    {
      path: '/cadastro/:dado',
      name: 'cadastro-form-param' /* cadastro form - utilizando parametros de rotas */,
      component: Cadastro,
    },
    {
      path: '/nested/',
      name: 'rota-aninhada' /* rota aninha pai */,
      component: Nested,
      children: [
        {
          path: 'nested2',
          name: 'rota-aninhada2' /* rota aninhada filha */,
          component: Nested2,
        },
      ],
    },
  ],
});

export default router;

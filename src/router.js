import { createRouter, createWebHistory } from "vue-router";
import Home from "/rotas/Home.vue";
import Cotacao from "/rotas/Cotacao.vue";
import CompenteAcoes from "/rotas/CompenteAcoes.vue";
import CriarConta from "/rotas/CriarConta.vue";
import Login from "/rotas/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cotacao",
    name: "cotacao",
    component: Cotacao
  },

  {
    path: "/CompenteAcoes",
    name: "CompenteAcoes",
    component: CompenteAcoes
  },
  {
    path: "/criarConta",
    name: "CriarConta",
    component: CriarConta
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

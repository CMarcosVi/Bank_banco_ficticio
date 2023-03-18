import {createRouter , createWebHistory} from "vue-router";
import Home from "/components/Home.vue";
import Cotacao from "/components/Cotacao.vue";
import CompenteAcoes from "/components/CompenteAcoes.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
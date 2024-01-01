<template>
  <nav class="navbar">
    <h1 class="projetoNome">BANK 3.0</h1>
    <ul class="nav-list" v-bind:class="{ active: navbarOpen }">
      <router-link class="routerr" to="/">Home</router-link>
      <router-link class="routerr" to="/cartoes">Cartões</router-link>
      <router-link class="routerr" to="/compenteAcoes">Investimento</router-link>
    </ul>
    <div class="loginCriar">
      <a href="http://localhost/LoginBank3.0/index.php"  target="_blank" class="criarConta">Criar Conta</a>
      <router-link to="/login" class="logar">Logar →</router-link>
    </div>
    <div v-on:click="toggleNavbar" class="btn-navHambuguer">
      <div class="btn-nav"></div>
    </div>
  </nav>
</template>

<script setup>
import {ref} from 'vue'

  const navbarOpen = ref(false) 
  function toggleNavbar() {
    navbarOpen.value = !navbarOpen.value
  }
</script>
  
  <style scoped>
  .navbar {
    position: fixed;
    z-index: 1;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-image: linear-gradient(180deg, #000, #0000);
  }
  .projetoNome {
    font-size:1rem;
    font-family: 'Megrim', cursive;
    background-image: linear-gradient(to right, #0f4, #0f4, #074);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .btn-navHambuguer {
    display: none;
  }
  .loginCriar {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .criarConta {
    background-color: #111;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.25rem 1rem;
    border: #fff solid 1px;
    transition: 1s;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    font-family: "Kanit", s ans-serif;
  }
  .criarConta:hover {
    background-color: #000;
    color: #0f5;
    border-color: #0f5;
    transition: 1s;
  }
  .logar {
    font-family: "Kanit", sans-serif;
    border: none;
    background-image: linear-gradient(to right, #0f4, #0f4, #074);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0rem 1rem;
    text-decoration: none;
  }
  .nav-list {
    display: flex;
    justify-content: space-around;
  }
  router-view {
    height: 100vh;
  }
  .routerr {
    font-size: 1rem;
    color: white;
    font-family: "Kanit", sans-serif;
    font-weight: 300;
    font-style: normal;
    margin: 1rem;
    list-style: none;
    text-decoration: none;
    transition: 0.5s;
  }
  .routerr:hover {
    transition: 0.5s;
    color: #0f5;
  }
  
  @media screen and (max-width: 750px) {
    .nav-list {
      display: none;
    }
    .nav-list.active {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      top: 0%;
      backdrop-filter: blur(5px);
      background-color: #0008;
      height: 100vh;
      width: 100%;
    }
    .criarConta,
    .logar {
      display: none;
    }
    .btn-navHambuguer {
      display: block;
      cursor: pointer;
      z-index: 2;
    }
    .btn-nav {
      width: 25px;
      height: 2px;
      background-color: #0f5;
      margin-bottom: 6px;
    }
    .btn-nav::before {
      position: relative;
      bottom: 7px;
      content: "";
      display: block;
      width: 25px;
      height: 2px;
      background-color: #0f5;
      margin-top: 5px;
    }
    .btn-nav::after {
      position: relative;
      top: 6px;
      content: "";
      display: block;
      width: 25px;
      height: 2px;
      background-color: #0f5;
      margin-bottom: 5px;
    }
  }
  </style>
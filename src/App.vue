<template>
    <nav class="navbar">
      <h1>BanK</h1>
      <ul>
        <router-link class="routerr" to="/">Home</router-link> 
        <router-link class="routerr" to="/Cotacao">Cotação</router-link>
        <router-link class="routerr" to="/CompenteAcoes">Ações</router-link>
      </ul>
    </nav> 
    <router-view></router-view>
</template>

<script>


export default {
  el: "App",
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;0,300;1,200;1,500;1,600&display=swap');
*{
  margin:0;
  padding:0;
}
body{
  height:100vh;
}
.navbar{
  height:7vh;
}
h1{
  font-weight:600;
  font-style:italic;
  font-family: 'Kanit', sans-serif;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
nav{
  background-color:black;
  display:flex;
  justify-content:space-around;
  align-items:center;
  padding:0.5rem;
}
ul{
  display:flex;
}
.routerr{
  color:white;
  font-family: 'Kanit', sans-serif;
  font-weight:300;
  font-style:normal;
  margin:1rem;
  list-style:none;
  transition:1s;
  
}
.routerr:hover{
  transition:1s;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
}
</style>
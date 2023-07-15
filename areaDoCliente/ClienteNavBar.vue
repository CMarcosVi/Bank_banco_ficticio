<template>
  <nav class="navBarCliente">
    <div class="proximosLugares">
      <img src="../img/sombra-de-usuario-masculino.png" alt="" />
    </div>
    <div class="proximosLugares">
      <img src="../img/investimento.png" alt="" />
    </div>
    <router-link class="proximosLugares" id="setaDevoltar" to="/"
      >←</router-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style>
#setaDevoltar {
  font-size: 2rem;
  color: #0f5;
}
.navBarCliente {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 70vh;
  width: 70px;
  background-color: #000;
  border-radius: 5rem;
}
.proximosLugares {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #000;
  border-radius: 5rem;
  border: solid 3px #0f5;
  transition: 1s;
  text-decoration: none;
}
.proximosLugares > img {
  height: 25px;
  width: 25px;
}
</style>
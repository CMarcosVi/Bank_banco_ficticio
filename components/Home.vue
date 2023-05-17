<template>
  <div class="caixa">
    <div>
      <div>
        <p class="titulo1">O maior banco</p>
        <p class="titulo2">da America latina</p>
      </div>
      <button>Criar conta</button>
    </div>
    <div class="cartao">
      <h1 class="logodoCartao">Bank</h1>
      <p class="seuNome">Seu Nome Aqui</p>
      <img src="./chip.png" />
    </div>
    <div class="ciculos" id="circulo1"></div>
    <div class="ciculos" id="circulo2"></div>
    <div class="ciculos" id="circulo3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.caixa {
  background-color: #000;
  overflow: hidden;
  height: 90.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seuNome {
  color: #0f4;
}
.cartao {
  position: relative;
  left: 10vw;
  font-family: "Kanit", sans-serif;
  text-align: center;
  height: 20rem;
  width: 15rem;
  border-radius: 0.5rem;
  background: radial-gradient(
    circle,
    rgba(20, 20, 20, 1) 80%,
    rgba(0, 255, 34, 1) 80%,
    rgba(0, 255, 34, 1) 90%,
    rgba(20, 20, 20, 1) 90%
  );
  transform: matrix(0.52, 0.51, -0.13, 0.77, 11, -10);
  border-style: solid;
  border-color: #051;
}
.cartao > img {
  background-color: #0f4;
  border-radius: 1rem;
  padding: 0.25rem;
  margin-top: 10rem;
  height: 2rem;
  width: 2rem;
  transform: rotate(90deg);
}
.ciculos {
  position: relative;
  border-radius: 10rem;
  background: #000;
}
#circulo1 {
  background: linear-gradient(
    14deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 255, 34, 1) 100%
  );
  height: 2rem;
  width: 2rem;
}
#circulo2 {
  background: linear-gradient(
    14deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 255, 34, 1) 100%
  );
  height: 5rem;
  width: 5rem;
}
#circulo3 {
  background: linear-gradient(
    14deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 255, 34, 1) 100%
  );
  height: 20rem;
  width: 20rem;
  top: 50vh;
}

.colocacao {
  color: #fff;
  font-family: "Kanit", sans-serif;
  font-size: 4rem;
}
.titulo1 {
  color: #0f4;
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  font-size: 3rem;
}
.titulo2 {
  color: #fff;
  font-family: "Kanit", sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 3rem;
}
button {
  font-family: "Kanit", sans-serif;
  font-size: 1rem;
  background-color: white;
  border-radius: 2rem;
  padding: 0.5rem;
  transition: 0.5s;
}
button:hover {
  transition: 0.5s;
  color: #0f4;
  background-color: black;
}
@media screen and (max-width: 625px) {
  .caixa {
    display: flex;
    flex-direction: column-reverse;
  }
  .ciculos {
    display: none;
  }
  .cartao {
    height: 15rem;
    width: 10rem;
  }
  .logodoCartao {
    font-size: 1.5rem;
  }
  .cartao > img {
    padding: 0.25rem;
    margin-top: 7rem;
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>
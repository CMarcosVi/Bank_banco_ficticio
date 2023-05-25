<template>
  <NavBar />
  <div class="caixa">
    <div>
      <div>
        <p class="titulo1">O maior banco</p>
        <p class="titulo2">da America latina</p>
      </div>
      <div class="criarContaVMobile">
        <router-link to="/criarConta" class="criarConta2"
          >Criar Conta</router-link
        >
        <router-link to="/login" class="logar2">Logar →</router-link>
      </div>
    </div>
    <div class="cartao">
      <h1 class="logodoCartao">Bank</h1>
      <img class="masterCardIcon" src="../img/img.icons8.png" alt="" />
      <img class="chipIcon" src="../img/chip.png" />
    </div>
    <div class="ciculos" id="circulo1"></div>
    <div class="ciculos" id="circulo2"></div>
    <div class="ciculos" id="circulo3"></div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.caixa {
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seuNome {
  color: #0f4;
}
.criarConta2,
.logar2 {
  display: none;
}
.logodoCartao {
  text-align: start;
  margin: 0rem 1rem;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.cartao {
  background-color: #000;
  position: relative;
  font-family: "Kanit", sans-serif;
  text-align: center;
  height: 20rem;
  width: 15rem;
  border-radius: 0.5rem;
  transform: matrix(0.52, 0.51, -0.13, 0.77, 11, -40);
  border-style: solid;
  border-color: #051;
  animation: movimentacao 3s infinite;
}
.chipIcon {
  position: absolute;
  top: 25%;
  left: 35%;
  background-color: #0f4;
  border-radius: 1rem;
  padding: 0.25rem;
  margin-top: 10rem;
  height: 2rem;
  width: 2rem;
  transform: rotate(90deg);
}
.masterCardIcon {
  position: absolute;
  top: -50%;
  left: 70%;
  background-color: none;
  border-radius: 1rem;
  padding: 0.25rem;
  margin-top: 10rem;
  height: 3rem;
  width: 3rem;
}
.criarContaVMobile {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.ciculos {
  position: relative;
  border-radius: 10rem;
  background: #000;
}
#circulo1 {
  background: linear-gradient(
    14deg,
    rgba(0, 255, 70, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 2rem;
  width: 2rem;
  -webkit-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
}
#circulo2 {
  background: linear-gradient(
    14deg,
    rgba(0, 255, 70, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 5rem;
  width: 5rem;
  -webkit-box-shadow: 0px 0px 37px 29px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 37px 29px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 37px 29px rgba(0, 0, 0, 0.75);
}
#circulo3 {
  background: linear-gradient(
    14deg,
    rgba(0, 255, 70, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 20rem;
  width: 20rem;
  top: 50vh;
  -webkit-box-shadow: 0px 0px 37px 15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 37px 15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 37px 15px rgba(0, 0, 0, 0.75);
}
.masterCardIcon {
  background-color: none;
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
  text-shadow: 0.1em 0.1em 0.2em #051;
  font-family: "Kanit", sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 3rem;
}
@keyframes movimentacao {
  0% {
    transform: matrix(0.52, 0.51, -0.13, 0.77, 11, -40);
  }
  50% {
    transform: matrix(0.52, 0.51, -0.13, 0.77, 11, -50);
  }
  100% {
    transform: matrix(0.52, 0.51, -0.13, 0.77, 11, -40);
  }
}
@media screen and (max-width: 625px) {
  .titulo1,
  .titulo2 {
    font-size: 2rem;
  }
  .caixa {
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
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
  .masterCardIcon {
    position: absolute;
    top: -45%;
  }
  .criarConta2 {
    display: block;
    background-color: #111;
    color: #fff;
    border-radius: 0.5rem;
    padding: 0.25rem 2rem;
    border: #fff solid 1px;
    transition: 1s;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    font-family: "Kanit", sans-serif;
    margin: 3rem;
  }
  .logar2 {
    display: block;
    background-image: linear-gradient(to right, #0f4, #0f4, #074);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.1rem;
    cursor: pointer;
    margin: 0rem 1rem;
    border: none;
    text-decoration: none;
    font-family: "Kanit", sans-serif;
  }
  .criarConta2:hover {
    background-color: #000;
    color: #0f5;
    border-color: #0f5;
    transition: 1s;
  }
  .ciculos {
    position: relative;
    border-radius: 10rem;
    background: #000;
  }
  #circulo1 {
    display: block;
    position: absolute;
    top: 10vh;
    left: 15%;
    background: linear-gradient(
      14deg,
      rgba(0, 255, 70, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    height: 2rem;
    width: 2rem;
    -webkit-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  }
  #circulo2 {
    display: block;
    position: absolute;
    top: 30vh;
    left: 5%;
    background: linear-gradient(
      14deg,
      rgba(0, 255, 70, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    height: 5rem;
    width: 5rem;
    -webkit-box-shadow: 0px 0px 37px 29px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 37px 29px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 37px 29px rgba(0, 0, 0, 0.75);
  }
  #circulo3 {
    display: block;
    position: absolute;
    top: 80vh;
    left: 75vw;
    background: linear-gradient(
      14deg,
      rgba(0, 255, 70, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    height: 5rem;
    width: 5rem;
    -webkit-box-shadow: 0px 0px 37px 15px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 37px 15px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 37px 15px rgba(0, 0, 0, 0.75);
  }
}
</style>
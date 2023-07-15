<template>
  <div class="carousel">
    <div
      class="carousel__slides"
      :style="{ transform: `translateX(-${currentCartoes * 100}%)` }"
    >
      <div
        v-for="(cartao, index) in cartoes"
        :key="index"
        class="carousel__slide"
      >
        <h1 :class="cartao['class']">{{ cartao.title }}</h1>
        <div :class="cartao['classCartao']">
          <h1 :class="cartao['logoDosCartoes']">Bank</h1>
          <img
            class="masterCardIconCartoes"
            src="../img/img.icons8.png"
            alt=""
          />
          <img class="chitDecompra" src="../img/lasca.png" />
          <img :class="cartao['classCoroa']" src="../img/coroa.png" />
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
    <button class="carousel__prev" @click="prevCartoes">&larr;</button>
    <button class="carousel__next" @click="nextCartoes">&rarr;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartoes: [
        {
          title: "Cartão Simples",
          class: "simples",
          logoDosCartoes: "base",
          classCartao: "cartaoSimples",
          description: "Descrição do slide 1",
          classCoroa: "semCoroa",
        },
        {
          title: "Cartão Kids",
          class: "kids",
          logoDosCartoes: "logoKids",
          classCartao: "cartaoKids",
          description: "Descrição do slide 2",
          classCoroa: "semCoroa",
        },
        {
          title: "Cartão Empresarial",
          class: "empresarial",
          logoDosCartoes: "logoEmpresarial",
          classCartao: "cartaoEmpresarial",
          description: "Descrição do slide 3",
          classCoroa: "semCoroa",
        },
        {
          title: "Cartão Plus",
          class: "plus",
          logoDosCartoes: "logoPlus",
          classCartao: "cartaoPlus",
          description: "Descrição do slide 4",
          classCoroa: "semCoroa",
        },
        {
          title: "Cartão Deluxe",
          class: "deluxe",
          logoDosCartoes: "delux",
          classCartao: "cartaoDeluxe",
          description: "Descrição do slide 5",
          classCoroa: "comCoroa",
        },
      ],
      currentCartoes: 0,
    };
  },
  methods: {
    nextCartoes() {
      this.currentCartoes = (this.currentCartoes + 1) % this.cartoes.length;
    },
    prevCartoes() {
      this.currentCartoes =
        (this.currentCartoes - 1 + this.cartoes.length) % this.cartoes.length;
    },
  },
};
</script>

<style scoped>
.projetoNome {
  font-size: 2rem;
}
.logoEmpresarial {
  color: #000;
}
.logoPlus {
  color: #00f;
}
.semCoroa {
  display: none;
}
.comCoroa {
  height: 50px;
  width: 50px;
  border: solid 3px #ff0;
  border-radius: 5rem;
  padding: 1rem;
}
.chitDecompra {
  position: absolute;
  top: 80%;
  height: 30px;
  transform: rotate(90deg);
  width: 30px;
}
.logoDoscartoes {
  transform: rotate(90deg);
  font-family: "Megrim", cursive;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.masterCardIconCartoes {
  position: absolute;
  top: -30%;
  left: 70%;
  background-color: none;
  border-radius: 1rem;
  padding: 0.25rem;
  margin-top: 10rem;
  height: 3rem;
  width: 3rem;
}
.cartaoSimples {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 250px;
  margin: 3rem;
  font-family: "Megrim", cursive;
  font-size: 1.5rem;
  text-align: center;
  background: radial-gradient(circle at right top, #111, #000);
  transform: matrix(0.52, 0.51, -0.13, 0.77, 0, 0);
  border-radius: 0.5rem;
  border: solid 1px #0f5;
  box-shadow: 18px 22px 49px 8px rgba(0, 0, 0, 0.75);
}
.cartaoKids {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 250px;
  margin: 3rem;
  font-family: "Megrim", cursive;
  font-size: 1.5rem;
  text-align: center;
  background: radial-gradient(
    circle,
    rgba(0, 255, 85, 1) 20%,
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 255, 85, 1) 40%,
    rgba(0, 255, 85, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 255, 85, 1) 70%,
    rgba(0, 255, 85, 1) 80%,
    rgba(0, 0, 0, 1) 80%
  );
  transform: matrix(0.52, 0.51, -0.13, 0.77, 0, 0);
  border-radius: 0.5rem;
  border: solid 1px #0f5;
  box-shadow: 18px 22px 49px 8px rgba(0, 0, 0, 0.75);
}
.cartaoEmpresarial {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 250px;
  margin: 3rem;
  font-family: "Megrim", cursive;
  font-size: 1.5rem;
  text-align: center;
  background: radial-gradient(circle at right top, #bbb, #fff);
  transform: matrix(0.52, 0.51, -0.13, 0.77, 0, 0);
  border-radius: 0.5rem;
  border: solid 1px #000;
  box-shadow: 18px 22px 49px 8px rgba(0, 0, 0, 0.75);
}
.cartaoPlus {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 250px;
  margin: 3rem;
  font-family: "Megrim", cursive;
  font-size: 1.5rem;
  text-align: center;
  background: radial-gradient(circle at right top, #002, #000);
  transform: matrix(0.52, 0.51, -0.13, 0.77, 0, 0);
  border-radius: 0.5rem;
  border: solid 1px #005;
  box-shadow: 18px 22px 49px 8px rgba(0, 0, 0, 0.75);
}
.cartaoDeluxe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 250px;
  margin: 3rem;
  font-family: "Megrim", cursive;
  font-size: 1.5rem;
  background: radial-gradient(circle at right top, #111, #000);
  transform: matrix(0.52, 0.51, -0.13, 0.77, 0, 0);
  border-radius: 0.5rem;
  border: solid 1px #ff0;
  box-shadow: 18px 22px 49px 8px rgba(0, 0, 0, 0.75);
  overflow: hidden;
}
.simples {
  font-family: "Kanit", sans-serif;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.kids {
  font-family: "Kanit", sans-serif;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.empresarial {
  font-family: "Kanit", sans-serif;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.plus {
  font-family: "Kanit", sans-serif;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.deluxe {
  font-family: "Kanit", sans-serif;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.base {
  transform: rotate(270deg);
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.delux {
  display: none;
  color: #ffd700;
}
.cartoes {
  height: 100vh;
}
.carousel {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.carousel__slides {
  width: 100vw;
  display: flex;
  transition: transform 0.5s ease-in-out;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel__slide {
  position: relative;
  top: -30vh;
  flex: 0 0 100%;
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel__prev,
.carousel__next {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  cursor: pointer;
  align-items: center;
  border-radius: 10rem;
  height: 50px;
  width: 50px;
  border: solid 1px #0f5;
  background: #000;
  color: #0f5;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  transition: 1s;
}
.carousel__prev:hover,
.carousel__next:hover {
  border: solid 1px #0f5;
  background: #0f5;
  color: #000;
  transition: 1s;
}

.carousel__prev {
  left: 10px;
}

.carousel__next {
  right: 10px;
}
@media screen and (max-width: 625px) {
  .cartaoSimples,
  .cartaoKids,
  .cartaoEmpresarial,
  .cartaoPlus,
  .cartaoDeluxe {
    height: 400px;
    width: 200px;
  }
  .masterCardIconCartoes {
    position: absolute;
    top: -40%;
    left: 70%;
    background-color: none;
    border-radius: 1rem;
    padding: 0.25rem;
    margin-top: 10rem;
    height: 2.5rem;
    width: 2.5rem;
  }
}
</style>
<script setup>
</script>

<template>
  <div class="divii">
    <div>
      <h1 class="subTitulo1">O maior banco</h1>
      <h2 class="subTitulo2">Da america latina</h2>
    </div>
 
    <div class="cartao">
      <h1 class="tituloCartao">Bank</h1>
      <img class="chipCartao" src="../img/lasca.png"/>
      <img class="masterCardIcon" src="../img/img.icons8.png" alt="" />
    </div> 
    
    <div class="ciculos" id="circulo1"></div>
    <div class="ciculos" id="circulo2"></div>
    <div class="ciculos" id="circulo3"></div>
    <div class="criarContaVMobile">
        <a to="/criarConta" class="criarConta2">Criar Conta</a>
        <a to="/login" class="logar2">Logar →</a>
  </div>
  </div>
</template>

<style lang="scss" scoped>
  @mixin gradiant-circulos{
    background: linear-gradient(
      14deg,
      rgba(0, 255, 70, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.75);
  }
  .divii {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #111;
    overflow:hidden;
  }
  .criarContaVMobile{
    display: none;
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
  .cartao{
    background: radial-gradient(circle at right top, #111, #000);
    position: relative;
    font-family: "Megrim", cursive;
    text-align: center;
    height: 20rem;
    width: 12.5rem;
    border-radius: 0.5rem;
    transform: matrix(0.52, 0.51, -0.13, 0.77, 11, -40);
    border-style: solid;
    border-color: #051;
    animation: movimentacao 3s infinite;
  }
  .chipCartao{
    position: absolute;
    top: 25%;
    left: 40%;
    padding: 0.25rem;
    margin-top: 10rem;
    height: 2rem;
    transform: rotate(90deg);
  }
  .tituloCartao{
    text-align: start;
    margin: 0rem 1rem;
    background-image: linear-gradient(to right, #0f4, #0f4, #074);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .subTitulo1 {
    color: #0f4;
    font-family: "Megrim", cursive;
    font-weight: 600;
    font-size: 2rem;
  }
  .subTitulo2 {
    color: #fff;
    text-shadow: 0.1em 0.1em 0.2em #051;
    font-family: "Megrim", cursive;
    font-style: italic;
    font-weight: 600;
    font-size: 2rem;
  }

  .ciculos {
    position: relative;
    border-radius: 10rem;
    background: #000;
  }
  #circulo1 {
    @include gradiant-circulos;
    height: 2rem;
    width: 2rem;
    
  }
  #circulo2 {
    @include gradiant-circulos;
    height: 5rem;
    width: 5rem;
    left: 25%;
    top: -20vh;
  }
  #circulo3 {
    @include gradiant-circulos;
    height: 20rem;
    width: 20rem;
    top: 50vh;
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
  @media screen and (max-width: 960px) {
    .subTitulo1,
    .subTitulo2 {
      font-size: 1.5rem;
    }
    .divii {
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .ciculos {
      display: none;
    }
    .cartao {
      margin-top:5rem;
      height: 13rem;
      width: 9rem;
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
      padding: 0.25rem 1rem;
      border: #fff solid 1px;
      transition: 1s;
      cursor: pointer;
      font-size: 1.1rem;
      text-decoration: none;
      font-family: "Megrim", cursive;
      letter-spacing: 1px;
      margin: 1rem;;
    }
    .criarContaVMobile{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .logar2 {
      display: block;
      background-image: linear-gradient(to right, #0f4, #0f4, #074);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.5rem;
      cursor: pointer;
      margin: 0rem 1rem;
      border: none;
      text-decoration: none;
      font-family: "Megrim", cursive;
      letter-spacing: 1px;
      transition: 1s;
    }
    .logar2:hover {
      background-image: linear-gradient(to right, #0f4, #0f4, #074);
      letter-spacing: 0px;
      transition: 1s;
    }
    .criarConta2:hover {
      background-color: #000;
      color: #0f5;
      border-color: #0f5;
      letter-spacing: 0px;
      transition: 1s;
    }
    .ciculos {
      position: relative;
      border-radius: 10rem;
      background: #000;
    }
    #circulo1,#circulo2,#circulo3{
      display: block;
      position: absolute;
    }
    #circulo1 {
      top: 10vh;
      left: 15%;
      height: 1rem;
      width: 1rem;
    }
    #circulo2 {
      top: 30vh;
      left: 5%;
      height: 2.5rem;
      width: 2.5rem;
    }
    #circulo3 {
      top: 80vh;
      left: 75vw;
      height: 3rem;
      width: 3rem;
    }
  }
</style>
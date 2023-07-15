<template>
  <section class="areaDeLogin">
    <form class="formLogin">
      <h1 class="formTitulo">Login</h1>
      <label class="labelDosInputsLogin">Nome</label>
      <input class="campoInputsLogin" type="text" />
      <label class="labelDosInputs">Email</label>
      <input class="campoInputs" type="email" />
      <label class="labelDosInputs">CPF</label>
      <input class="campoInputs" type="Number" />
      <label class="labelDosInputs">Senha</label>
      <input class="campoInputs" type="password" />
      <router-link to="/AreaDoCliente" class="entrar">Entrar</router-link>
    </form>
    <router-link class="voltarHomeLogin" to="/">←</router-link>
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
.areaDeLogin {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formLogin {
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 5rem;
  border-radius: 1rem;
  position: relative;
  z-index: 1;
}
.formTitulo {
  font-family: "Poppins", sans-serif;
  text-align: center;
  background-image: linear-gradient(to right, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tituloLogin {
  font-family: "Poppins", sans-serif;
  text-shadow: 1rem 1rem 3rem #000;
  font-size: 22rem;
  color: #082;
  padding: 0;
  margin: 0;
  width: 700px;
  height: 300px;
  z-index: 0;
}
.labelDosInputsLogin {
  font-family: "Poppins", sans-serif;
  color: #777;
  margin-top: 1.5rem;
}
.campoInputsLogin {
  font-family: "Poppins", sans-serif;
  color: #fff;
  background: #000;
  border: #0f5 solid 1px;
  border-color: #0000 #0000 #0f5 #0000;
  border-radius: 0rem;
  height: 1.5rem;
  width: 17.5rem;
}
.campoInputsLogin:focus {
  outline: none;
}
.voltarHomeLogin {
  position: absolute;
  top: 45vh;
  left: 5vw;
  text-align: center;
  color: #0f5;
  font-size: 2.5rem;
  background-color: #000;
  height: 50px;
  width: 50px;
  border-radius: 5rem;
  border: solid #0f5 3px;
  font-style: none;
  transition: 1s;
  text-decoration: none;
}
.voltarHomeLogin:hover {
  background-color: #0f5;
  color: #000;
  transition: 1s;
}
.entrar {
  text-align:center;
  text-decoration:none;
  margin: 1rem auto;
  width: 5rem;
  padding: 0.5rem 1rem;
  background-color: #000;
  color: #0f5;
  border: solid 2px #0f5;
  border-radius: 1rem;
  transition: 1s;
  font-family: "Megrim", cursive;
}
.entrar:hover {
  background-color: #0f5;
  color: #000;
  transition: 1s;
}
@media (max-width: 630px) {
  .voltarHomeLogin {
    position: absolute;
    top: 90vh;
    left: 45vw;
    text-align: center;
    color: #0f5;
    font-size: 2.5rem;
    background-color: #000;
    height: 50px;
    width: 50px;
    border-radius: 5rem;
    border: solid #0f5 3px;
    font-style: none;
    transition: 1s;
    text-decoration: none;
  }
  .voltarHomeLogin:hover {
    background-color: #0f5;
    color: #000;
    transition: 1s;
  }
}
@media (max-width: 440px) {
  .formLogin {
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 5rem 1rem;
    border-radius: 1rem;
    position: relative;
    z-index: 1;
  }
}
</style>
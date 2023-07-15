<template>
  <section id="areaDeFormulario">
    <div class="campoDeFormulario">
      <div class="formCriarConta">
        <h1 class="tituloCriarConta">CRIAR CONTA</h1>
        <div class="formulario">
          <form class="formlarioDeCriacao">
            <label class="labelDosInputs" for="Nome">Nome</label>
            <input type="text" class="campoInputs" id="Nome" />
            <label type="email" class="labelDosInputs" for="Email">Email</label>
            <input class="campoInputs" id="Email" />
            <label class="labelDosInputs" for="CPF">CPF</label>
            <input
              type="email"
              class="campoInputs"
              id="CPF"
              placeholder="000.000.000-00"
              maxlength="11"
            />
            <label class="labelDosInputs" for="Senha">Senha</label>
            <input
              type="password"
              minlength="8"
              class="campoInputs"
              id="Senha"
              placeholder="********"
            />
            <label class="labelDosInputs" for="ConfirmarSenha"
              >Confirmar Senha</label
            >
            <input
              type="password"
              minlength="8"
              class="campoInputs"
              id="ConfirmarSenha"
              placeholder="********"
            />
          </form>
          <form class="formlarioDeCriacao">
            <label class="labelDosInputs" for="dataDeNascimento"
              >Data de Nascimento</label
            >
            <input
              class="campoInputs"
              id="dataDeNascimento"
              type="date"
              placeholder="Data de nascimento"
            />
            <label class="labelDosInputs" for="NomeDaMae">Nome Da Mãe</label>
            <input
              class="campoInputs"
              id="NomeDaMae"
              type="text"
              placeholder="Nome Da mãe"
            />
            <label class="labelDosInputs" for="nomeDaRua">Nome Da rua</label>
            <input class="campoInputs" type="text" placeholder="Nome Da rua" />
            <label class="labelDosInputs" for="NumerodDaCasa"
              >Numero da casa</label
            >
            <input
              class="campoInputs"
              id="NumerodDaCasa"
              type="number"
              placeholder="Numero da Casa"
              min="0"
            />
            <label class="labelDosInputs" for="Pais">Pais</label>
            <input
              class="campoInputs"
              id="Pais"
              type="text"
              placeholder="Pais onde reside"
            />
          </form>
        </div>
        <input class="enviarForm" type="submit" placeholder="Enviar" />
      </div>
    </div>
    <nav>
      <router-link id="voltarHome" to="/">←</router-link>
    </nav>
    <h1 class="CRIAR">CRIAR</h1>
    <h2 class="CONTA">CONTA</h2>
  </section>
</template>

<script>
export default {
  name: "CriarConta",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,300;1,700&display=swap");

#areaDeFormulario {
  height: 100vh;
  overflow: hidden;
}
.campoDeFormulario {
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60rem;
  height: 40rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  border-radius: 1rem;
  z-index: 2;
  overflow: hidden;
}
#voltarHome {
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
#voltarHome:hover {
  background-color: #0f5;
  color: #000;
  transition: 1s;
}
.formCriarConta {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 50%;
}
.formulario {
  display: flex;
  justify-content: space-around;
}
.tituloCriarConta {
  font-family: "Poppins", sans-serif;
  text-align: center;
  background-image: linear-gradient(to right, #0f4, #074, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.formlarioDeCriacao {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.25rem 3rem;
}
.labelDosInputs {
  font-family: "Poppins", sans-serif;
  color: #777;
  margin-top: 1.5rem;
}
.campoInputs {
  font-family: "Poppins", sans-serif;
  color: #fff;
  background: #000;
  border: #0f5 solid 1px;
  border-color: #0000 #0000 #0f5 #0000;
  border-radius: 0rem;
  height: 1.5rem;
  width: 17.5rem;
}
.campoInputs:focus {
  outline: none;
}
.enviarForm {
  background-color: #111;
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
  border: #fff solid 1px;
  transition: 1s;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Megrim", cursive;
}
.enviarForm:hover {
  background-color: #000;
  color: #0f5;
  border-color: #0f5;
  transition: 1s;
}
.CRIAR {
  font-family: "Poppins", sans-serif;
  text-shadow: 1rem 1rem 3rem #000;
  font-size: 22rem;
  position: relative;
  top: 0vh;
  left: 10%;
  color: #082;
  padding: 0;
  margin: 0;
  width: 1200px;
  height: 300px;
  animation: animacaoDeFundo1 5s infinite;
}
.CONTA {
  font-family: "Poppins", sans-serif;
  text-shadow: 1rem 1rem 3rem #000;
  font-size: 22rem;
  position: relative;
  top: 15%;
  left: 15%;
  color: #333;
  padding: 0;
  margin: 0;
  width: 1200px;
  height: 300px;
  animation: animacaoDeFundo2 5s infinite;
}
@keyframes animacaoDeFundo1 {
  0% {
    top: 0vh;
  }
  50% {
    top: 3vh;
  }
  100% {
    top: 0vh;
  }
}
@keyframes animacaoDeFundo2 {
  0% {
    top: 15vh;
  }
  50% {
    top: 17vh;
  }
  100% {
    top: 15vh;
  }
}
@media (max-width: 1200px) {
  .campoDeFormulario {
    width: 90%;
    height: 40rem;
  }
  .formCriarConta {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .tituloCriarConta {
    font-size: 2rem;
  }
  .campoInputs {
    width: 100%;
  }
  .CRIAR {
    font-size: 15rem;
    width: 100%;
    height: 200px;
  }
  .CONTA {
    font-size: 15rem;
    width: 100%;
    height: 200px;
  }
  #voltarHome {
    top: 92vh;
    left: 45vw;
  }
}
@media (max-width: 400px) {
  .campoDeFormulario {
    width: 90%;
    height: 10rem;
  }
  .formCriarConta {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .formulario {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  #areaDeFormulario {
    height: 110vh;
    overflow: hidden;
  }
  .campoDeFormulario {
    width: 100%;
    overflow: none;
    height: 45rem;
  }
  .labelDosInputs {
    font-family: "Poppins", sans-serif;
    color: #777;
    margin-top: 0.5rem;
  }
  .campoInputs {
    font-family: "Poppins", sans-serif;
    color: #fff;
    background: #000;
    border: #0f5 solid 1px;
    border-color: #0000 #0000 #0f5 #0000;
    border-radius: 0rem;
    height: 1.5rem;
    width: 17.5rem;
  }
  .tituloCriarConta {
    font-size: 1rem;
  }
  #voltarHome {
    top: 90vh;
    left: 0vw;
  }
}
</style>
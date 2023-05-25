<template>
  <NavBar />
  <div class="acoes">
    <div class="separado" v-for="(value, key) in acoes" :key="key">
      <h1 class="acaoNome">{{ value.nome }}</h1>
      <h2>{{ value.sigla }}</h2>
      <div class="containerReal">
        <p class="real">R$</p>
        {{ value.preco.toFixed(2) }}
      </div>
      <p>{{ value.variacao.toFixed(2) }}%</p>
      <div class="containerReal">
        <p class="real">R$</p>
        {{ value.ultimoDividendo.toFixed(2) }}
      </div>
      <div class="calculos">
        <label :for="`quantidadeDeCotas-${key}`">Quantidade de cotas:</label>
        <input
          :id="`quantidadeDeCotas-${key}`"
          type="number"
          v-model="value.quantidadeDeCotas"
        />
        <button class="botaoCalculo" @click="calcularCota(value)">
          Calcular
        </button>
        <div class="containerReal" v-if="value.valorCotaFinal">
          Valor total:
          <p class="real">R$</p>
          {{
            value.valorCotaFinal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </div>
        <div class="containerReal" v-if="value.dividendoFinal">
          Dividendos:
          <p class="real">R$</p>
          {{
            value.dividendoFinal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "App",
  data() {
    return {
      acoes: {
        CaixaRioBravo: {
          nome: "Caixa Rio Bravo",
          sigla: "CXRI11",
          preco: 61.02,
          variacao: 1.93,
          ultimoDividendo: 0.56,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        BancoDoBrasil: {
          nome: "BB FUNDO DE FUNDOS",
          sigla: "BBFO11",
          preco: 66,
          variacao: 0.32,
          ultimoDividendo: 0.73,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        Solarium: {
          nome: "SOLARIUM FII",
          sigla: "SOLR11",
          preco: 1128.06,
          variacao: 14.0,
          ultimoDividendo: 8.75,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        Suno: {
          nome: "Suno",
          sigla: "SNCI11",
          preco: 97.47,
          variacao: 0.07,
          ultimoDividendo: 1,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        FundoMisto1: {
          nome: "HEDGE",
          sigla: "SEED11",
          preco: 100,
          variacao: 1.01,
          ultimoDividendo: 1.07,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        XpCredito: {
          nome: "XP CREDITO IMOBILIÁRIO - FDO INV IMOB",
          sigla: "XPCI11",
          preco: 79.54,
          variacao: 0.13,
          ultimoDividendo: 1,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        AfInvestCri: {
          nome: "AF INVEST CRI",
          sigla: "AFHI11",
          preco: 94.22,
          variacao: 0.21,
          ultimoDividendo: 1.05,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        RizaAkin: {
          nome: "RIZA AKIN",
          sigla: "RZAK11",
          preco: 96.64,
          variacao: 1.07,
          ultimoDividendo: 1.2,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        Valora: {
          nome: "Valora RE III",
          sigla: "VGIR11",
          preco: 9.74,
          variacao: 0.21,
          ultimoDividendo: 0.13,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        MaxiRenda: {
          nome: "Maxi Renda",
          sigla: "MXRF11",
          preco: 10.23,
          variacao: 0.49,
          ultimoDividendo: 0.12,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
      },
    };
  },
  methods: {
    calcularCota(value) {
      value.valorCotaFinal = (value.quantidadeDeCotas * value.preco).toFixed(2);
      value.dividendoFinal = (
        value.quantidadeDeCotas * value.ultimoDividendo
      ).toFixed(2);
    },
  },
  components: {
    NavBar,
  },
};
</script>
<style>
.titulo {
  background: linear-gradient(
    62deg,
    rgba(0, 255, 68, 1) 25%,
    rgba(0, 0, 0, 1) 25%,
    rgba(68, 68, 68, 1) 37%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 255, 68, 1) 50%,
    rgba(0, 255, 68, 1) 75%,
    rgba(0, 0, 0, 1) 75%,
    rgba(68, 68, 68, 1) 86%
  );
  animation: AnimationName 30s ease infinite;
  background-size: 400% 400%;
}

.acaoNome {
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
}
.acoes {
  font-family: "Kanit", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgb(0, 255, 68);
  background: linear-gradient(
    62deg,
    rgba(0, 255, 68, 1) 25%,
    rgba(0, 0, 0, 1) 25%,
    rgba(68, 68, 68, 1) 37%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 255, 68, 1) 50%,
    rgba(0, 255, 68, 1) 75%,
    rgba(0, 0, 0, 1) 75%,
    rgba(68, 68, 68, 1) 86%
  );
  animation: AnimationName 30s ease infinite;
  background-size: 400% 400%;
}
.separado {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  padding: 3rem;
  margin: 1rem;
  border-radius: 0.5rem;
  background-color: #000;
  color: white;
}
.calculos {
  display: flex;
  flex-direction: column;
  height: 5rem;
  width: 12rem;
}
.real {
  color: #0f4;
}
.containerReal {
  display: flex;
}
.botaoCalculo {
  margin: 0.5rem;
}
@keyframes AnimationName {
  0% {
    background-position: 0% 54%;
  }
  50% {
    background-position: 100% 47%;
  }
  100% {
    background-position: 0% 54%;
  }
}
@media screen and (max-width: 700px) {
  .acoes {
    grid-template-columns: 1fr;
  }
}
</style>

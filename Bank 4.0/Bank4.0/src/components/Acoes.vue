<template>
    <div class="areaDeacoes">
      <h1 class="acoesAreaNome">Ações</h1>
      <div class="acoes">
        <div class="separado" v-for="(value, key) in acoes" :key="key">
          <div class="titulo-acao">
            <h1 class="acaoNome">{{ value.nome }}</h1>
            <h2>{{ value.sigla }}</h2>
          </div>
          <div class="containerReal">
            <div style="display: flex;">
              <p class="real">CPC R$</p>
              {{ value.preco.toFixed(2) }}
            </div>
            <div style="display: flex;">
              <p class="real"> DY R$</p>
              {{ value.ultimoDividendo.toFixed(2) }}
            </div>
          </div>
          
          <div class="calculos">
            <label :for="`quantidadeDeCotas-${key}`">Quantidade de cotas:</label>
            <input
              :id="`quantidadeDeCotas-${key}`"
              type="number"
              v-model="value.quantidadeDeCotas"
              min="0"
            />
            <button class="botaoCalculo" @click="calcularCota(value)">
              Calcular
            </button>
            <div class="containerReal" v-if="value.valorCotaFinal !== undefined">
              Valor total:
              <div style="display: flex;">
                <p class="real">R$</p>
                <p>
                  {{
                    value.valorCotaFinal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })
                  }}
                </p>
              </div>
              
            </div>
            <div class="containerReal" v-if="value.dividendoFinal !== undefined">
              Dividendos:
              <div style="display: flex;">
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
      </div>
    </div>
</template>
      
<script setup>
  import { ref } from 'vue';
  
  var acoes = ref( [
        {
          nome: "Caixa Rio Bravo",
          sigla: "CXRI11",
          preco: 61.02,
          variacao: 1.93,
          ultimoDividendo: 0.56,
          quantidadeDeCotas: 0,
          valorCotaFinal: 0,
          dividendoFinal: 0,
        },
        {
          nome: "BB FUNDO DE FUNDOS",
          sigla: "BBFO11",
          preco: 66,
          variacao: 0.32,
          ultimoDividendo: 0.73,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        {
          nome: "SOLARIUM FII",
          sigla: "SOLR11",
          preco: 1128.06,
          variacao: 14.0,
          ultimoDividendo: 8.75,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        {
          nome: "Suno",
          sigla: "SNCI11",
          preco: 97.47,
          variacao: 0.07,
          ultimoDividendo: 1,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        {
          nome: "HEDGE",
          sigla: "SEED11",
          preco: 100,
          variacao: 1.01,
          ultimoDividendo: 1.07,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        {
          nome: "XP CREDITO IMOBILIÁRIO - FDO INV IMOB",
          sigla: "XPCI11",
          preco: 79.54,
          variacao: 0.13,
          ultimoDividendo: 1,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        {
          nome: "AF INVEST CRI",
          sigla: "AFHI11",
          preco: 94.22,
          variacao: 0.21,
          ultimoDividendo: 1.05,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        {
          nome: "RIZA AKIN",
          sigla: "RZAK11",
          preco: 96.64,
          variacao: 1.07,
          ultimoDividendo: 1.2,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
        {
          nome: "Valora RE III",
          sigla: "VGIR11",
          preco: 9.74,
          variacao: 0.21,
          ultimoDividendo: 0.13,
          quantidadeDeCotas: "",
          valorCotaFinal: "",
          dividendoFinal: "",
        },
      ]
  )
      const calcularCota = (value) => {
          const quantidadeDeCotas = parseFloat(value.quantidadeDeCotas);
  
          if (!isNaN(quantidadeDeCotas)) {
            value.valorCotaFinal = (quantidadeDeCotas * value.preco).toFixed(2);
            value.dividendoFinal = (quantidadeDeCotas * value.ultimoDividendo).toFixed(2);
          } else {
            console.error("Quantidade de cotas inválida.");
            value.valorCotaFinal = undefined;
            value.dividendoFinal = undefined;
          }
          console.log(acoes.value);
        };  
</script>
  
<style scoped lang="scss">
    .acoesAreaNome {
      text-align: center;
      padding-top: 5rem;
      font-family: "Megrim", cursive;
      background-image: linear-gradient(to right, #0f4, #0f4, #074);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .areaDeacoes {
      background-color:#111;
      animation: AnimationName 30s ease infinite;
      background-size: 400% 400%;
    }
    .titulo-acao{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }
    .acaoNome {
      font-size: .9rem;
      margin: 0;
      padding: 0;
    }
    .acoes {
      padding-top: 2rem;
      font-family: "Kanit", sans-serif;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      overflow: none;
    }
    .separado {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 210px;
      padding: 1rem;
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
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }
    .botaoCalculo {
      background-color: #000;
      color: #0f4;
      border-style: none;
      border: solid 1px #0f5;
      margin: 0.5rem;
      padding: 0.5rem 0rem;
      border-radius: 0.5rem;
      transition: 1s;
    }
    .botaoCalculo:hover {
      color: #000;
      background-color: #0f4;
      transition: 1s;
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
    @media screen and (max-width: 780px) {
      .acoes {
        grid-template-columns: 1fr;
      }
    }
</style>
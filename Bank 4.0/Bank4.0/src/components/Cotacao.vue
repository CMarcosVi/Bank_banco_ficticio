<script setup>
import Taxa from '../components/Taxa.vue';
import { ref, reactive, watch, onMounted } from 'vue';
import axios from 'axios';

const valores = reactive({
  USDBRLmoeda: 0,
  EURBRLmoeda: 0,
  BTCBRLmoeda: 0,
  LTCBRLmoeda: 0,
  ETHBRLmoeda: 0,
  GBPBRLmoeda: 0,
  valorTotal: 0,
  moedaSelecionada: 'USD',
});

const valorFinal = ref(0);

const requisicao = async () => {
  try {
    const resposta = await axios.get(
      'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,LTC-BRL,GBP-BRL'
    );

    const dados = resposta.data;

    valores.USDBRLmoeda = dados?.USDBRL?.bid || 0;
    valores.EURBRLmoeda = dados?.EURBRL?.bid || 0;
    valores.BTCBRLmoeda = dados?.BTCBRL?.bid || 0;
    valores.LTCBRLmoeda = dados?.LTCBRL?.bid || 0;
    valores.ETHBRLmoeda = dados?.ETHBRL?.bid || 0;
    valores.GBPBRLmoeda = dados?.GBPBRL?.bid || 0;
  } catch (erro) {
    console.error('Erro na requisição:', erro);
  }
};

onMounted(async () => {
  await requisicao();
});

watch(() => {
    switch (valores.moedaSelecionada) {
      case 'USD':
        valorFinal.value = valores.valorTotal * valores.USDBRLmoeda;
        break;
      case 'EUR':
        valorFinal.value = valores.valorTotal * valores.EURBRLmoeda;
        break;
      case 'BTC':
        valorFinal.value = valores.valorTotal * valores.BTCBRLmoeda;
        break;
      case 'ETH':
        valorFinal.value = valores.valorTotal * valores.ETHBRLmoeda;
        break;
      case 'LTC':
        valorFinal.value = valores.valorTotal * valores.LTCBRLmoeda;
        break;
      case 'GBP':
        valorFinal.value = valores.valorTotal * valores.GBPBRLmoeda;
        break;
      default:
        valorFinal.value = 0;
    }
  }
);
</script>

<template>
  <div class="cotacao">
    <Taxa />
    <div class="div">
      <div>
        <div class="valorMostrado">
          <p class="moeda"></p>
          {{
              valorFinal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
          }}
        </div>
        <input
          class="inputValor"
          type="number"
          placeholder="valor em BRL"
          v-model="valores.valorTotal"
          min="0"
        />
      </div>
      <div>
        <select class="opcoesMoeda" v-model="valores.moedaSelecionada">
          <option class="moedas" value="USD">USD(Dolar)</option>
          <option class="moedas" value="EUR">EUR(Euro)</option>
          <option class="moedas" value="BTC">BTC(Bitcoin)</option>
          <option class="moedas" value="ETH">ETH(ethereum)</option>
          <option class="moedas" value="LTC">LTC(Litecoin)</option>
          <option class="moedas" value="GBP">GBP(Libra esterlina)</option>
        </select>
      </div>
    </div>
  </div>
</template>




<style scoped>
  .cotacao {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    background-color: #111;
  }
  .div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    padding: 4rem;
    border-radius: 1rem;
    margin: 0;
  }
  .valorMostrado {
    font-family: "Kanit", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .moeda {
    font-family: "Kanit", sans-serif;
    color: #0f4;
  }
  .opcoesMoeda {
    margin: .5rem;
    text-align: center;
    background-color: black;
    color: #0f4;
    border-radius: 1rem;
    padding: 0.25rem;
    border-color: #0f4;
    transition: 0.5s;
  }
  .opcoesMoeda:hover {
    background-color: #0f4;
    color: #000;
    transition: 0.5s;
  }
  @media screen and (max-width: 1000px) {
    .cotacao {
      height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #111;
    }
    .div {
      margin: 0.75rem;
    }
  }
  @media screen and (max-width: 625px) {
    .tituloCotacao {
      font-size: 1.1rem;
    }
    .sobreTaxa {
      font-size: 1.3rem;
    }
    .div {
      padding: 3rem;
    }
  }
</style>
<template>
  <NavBar />
  <div class="cotacao">
    <div>
      <p class="sobreTaxa">
        todas as moedas<br />
        com taxa<br />
        de transição nula
      </p>
      <p class="taxazero">TAXA 0%</p>
      <p>&#128525; &#128177; &#128176; &#128154; &#127758;</p>
    </div>
    <div class="div">
      <div class="divCotacao">
        <h1 class="tituloCotacao">Conversão de moedas</h1>
        <div class="valorMostrado">
          <p class="moeda"></p>
          {{
            valorFinal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </div>
        <input
          class="inputValor"
          type="number"
          placeholder="valor em BRL"
          v-model="valorTotal"
        />
      </div>
      <div>
        <select class="opcoesMoeda" v-model="moedaSelecionada">
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
<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "App",
  data() {
    return {
      valorTotal: "",
      USDBRLmoeda: 0,
      EURBRLmoeda: 0,
      BTCBRLmoeda: 0,
      ETHBRLmoeda: 0,
      LTCBRLmoeda: 0,
      GBPBRLmoeda: 0,
      valorFinal: 0,
      moedaSelecionada: "USD",
    };
  },
  computed: {
    calculaValorFinal() {
      let taxa = 0;
      switch (this.moedaSelecionada) {
        case "BTC":
          taxa = this.BTCBRLmoeda;
          break;
        case "EUR":
          taxa = this.EURBRLmoeda;
          break;
        case "ETH":
          taxa = this.ETHBRLmoeda;
          break;
        case "LTC":
          taxa = this.LTCBRLmoeda;
          break;
        case "GBP":
          taxa = this.GBPBRLmoeda;
          break;
        default:
          taxa = this.USDBRLmoeda;
          break;
      }
      return this.valorTotal * taxa;
    },
  },
  mounted() {
    fetch(
      `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,LTC-BRL,GBP-BRL`
    )
      .then((r) => r.json())
      .then((r) => {
        this.USDBRLmoeda = r.USDBRL.bid;
        this.EURBRLmoeda = r.EURBRL.bid; // correção: estava setando o valor na variável errada
        this.BTCBRLmoeda = r.BTCBRL.bid;
        this.LTCBRLmoeda = r.LTCBRL.bid;
        this.ETHBRLmoeda = r.ETHBRL.bid;
        this.GBPBRLmoeda = r.GBPBRL.bid;
      });
  },
  watch: {
    valorTotal() {
      this.valorFinal = this.calculaValorFinal;
    },
    moedaSelecionada() {
      this.valorFinal = this.calculaValorFinal;
    },
  },
  components: {
    NavBar,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
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
.cotacao {
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
  align-items: center;
  height: 90.5vh;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 251, 0, 1) 50%,
    rgb(0, 150, 0)
  );
}
.div {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #000;
  padding: 5rem;
  border-radius: 1rem;
}
.opcoesMoeda {
  margin: 1rem;
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
.sobreTaxa,
.taxazero {
  font-size: 3rem;
  font-weight: 600;
  font-style: italic;
  font-family: "Kanit", sans-serif;
  background-image: linear-gradient(to right, #0f4, #0f4, #074);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media screen and (max-width: 1000px) {
  .cotacao {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 251, 0, 1) 50%,
      rgb(0, 150, 0)
    );
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
    font-size: 1.7rem;
  }
  .div {
    padding: 3rem;
    margin: 1rem;
  }
}
</style>
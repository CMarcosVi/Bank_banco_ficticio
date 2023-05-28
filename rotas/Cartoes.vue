<template>
  <section class="cartoes">
    <NavBar />
    <div class="areaDosCartoes">
      <ListaCartoes />     
    </div>

  </section>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ListaCartoes from "../components/ListaCartoes.vue"

export default {
  name: "cartoes",
  components: {
    NavBar,
    ListaCartoes,
  },
};
</script>
<style scoped>
.cartoes{
  overflow:hidden;
}
.areaDosCartoes{
  display:flex;
  flex-direction:column;
}
</style>
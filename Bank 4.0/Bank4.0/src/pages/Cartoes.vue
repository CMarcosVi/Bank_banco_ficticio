<script setup>
import ListaCartoes from "../components/ListaCartoes.vue"

</script>

<template>
    <section class="cartoes">
      <div class="areaDosCartoes">
        <ListaCartoes />     
      </div>
    </section>
</template>
  

  <style scoped>
  .cartoes{
    overflow:hidden;
    background-color: #111;
  }
  .areaDosCartoes{
    display:flex;
    flex-direction:column;
  }
  </style>
<template>
  <section>
    <div class="clienteNavbar">
      <ClienteNav />
    </div>
  </section>
</template>

<script>
import ClienteNav from "./ClienteNavBar.vue";
export default {
  components: {
    ClienteNav,
  },
};
</script>

<style>
.clienteNavbar {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
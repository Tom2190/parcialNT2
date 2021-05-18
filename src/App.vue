<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>TP4</h1>
      <br>

      <Navbar />
      <router-view></router-view>

      <!-- <Formulario />
      <Usuarios /> -->

    </div>
  </div>
</template>

<script>
// import Formulario from './components/Formulario/index.vue'
// import Usuarios from './components/Usuarios.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // Formulario,
    // Usuarios,
    Navbar
  }
}
</script>

<style>
  /* #app {
  } */

  h1 {
    color: blue;
  }

  .jumbotron {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }
</style>

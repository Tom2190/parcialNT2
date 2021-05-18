<template>
  <div id="app" class="container-fluid bg-dark full-height">
    <div class="jumbotron p-3 mb-2 bg-dark text-white">
      <h1>Tp4 - Tomás Fernández Abrevaya</h1>
      <br>

      <Navbar />
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import Navbar from './componentes/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  h1 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
  }

  .jumbotron {
    padding-top: 48px !important;
    padding-bottom: 48px !important;
  }

  html, body {
  height: 100%;
}

.full-height {
  height: 100%;
}
</style>

<template>
  <div class="container-fluid bg-secondary full-height full-width">
    <div>
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
  background-color: grey;
}

.full-height {
  height: 100%;
}
</style>

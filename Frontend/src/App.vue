<!-- src/App.vue -->
<template>
  <div class="container">
    <h1 class="text-center my-4">Carteira Digital de Identidade Básica</h1>
    <ConnectWallet />
    <RegisterIdentity />
    <ViewIdentity />
    <UpdateIdentity />
  </div>
</template>

<script>
import ConnectWallet from './components/ConnectWallet.vue'
import RegisterIdentity from './components/RegisterIdentity.vue'
import ViewIdentity from './components/ViewIdentity.vue'
import UpdateIdentity from './components/UpdateIdentity.vue'

export default {
  name: 'App',
  components: {
    ConnectWallet,
    RegisterIdentity,
    ViewIdentity,
    UpdateIdentity
  }
}
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>
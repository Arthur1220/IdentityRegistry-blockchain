<!-- src/components/RegisterIdentity.vue -->
<template>
    <div class="container my-4">
      <h2>Registrar Identidade</h2>
      <form @submit.prevent="registerIdentity">
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input type="text" id="name" v-model="name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="phoneNumber" class="form-label">Número de Telefone</label>
          <input type="text" id="phoneNumber" v-model="phoneNumber" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="dateOfBirth" class="form-label">Data de Nascimento</label>
          <input type="date" id="dateOfBirth" v-model="dateOfBirth" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-success">Registrar</button>
      </form>
      <div v-if="transactionHash" class="alert alert-info mt-3">
        Transação enviada! Hash: <a :href="txUrl" target="_blank">{{ transactionHash }}</a>
      </div>
      <div v-if="errorMessage" class="alert alert-danger mt-3">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { initializeEthers } from '../ethers'
  
  export default {
    name: 'RegisterIdentity',
    setup() {
      const name = ref('')
      const email = ref('')
      const phoneNumber = ref('')
      const dateOfBirth = ref('')
      const transactionHash = ref('')
      const errorMessage = ref('')
  
      const registerIdentity = async () => {
        try {
          const contract = await initializeEthers()
          const tx = await contract.registerIdentity(name.value, email.value, phoneNumber.value, dateOfBirth.value)
          transactionHash.value = tx.hash
          errorMessage.value = ''
  
          await tx.wait()
          alert('Identidade registrada com sucesso!')
        } catch (error) {
          console.error('Erro ao registrar identidade:', error)
          errorMessage.value = error.reason || 'Falha ao registrar identidade.'
          transactionHash.value = ''
        }
      }
  
      return {
        name,
        email,
        phoneNumber,
        dateOfBirth,
        registerIdentity,
        transactionHash,
        errorMessage
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>  
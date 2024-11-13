<!-- src/components/UpdateIdentity.vue -->
<template>
    <div class="container my-4">
      <h2>Atualizar Identidade</h2>
      <form @submit.prevent="updateIdentity">
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
        <button type="submit" class="btn btn-warning">Atualizar</button>
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
    name: 'UpdateIdentity',
    setup() {
      const name = ref('')
      const email = ref('')
      const phoneNumber = ref('')
      const dateOfBirth = ref('')
      const transactionHash = ref('')
      const errorMessage = ref('')
  
      const updateIdentity = async () => {
        try {
          const contract = await initializeEthers()
          const tx = await contract.updateIdentity(name.value, email.value, phoneNumber.value, dateOfBirth.value)
          transactionHash.value = tx.hash
          errorMessage.value = ''
  
          await tx.wait()
          alert('Identidade atualizada com sucesso!')
        } catch (error) {
          console.error('Erro ao atualizar identidade:', error)
          errorMessage.value = error.reason || 'Falha ao atualizar identidade.'
          transactionHash.value = ''
        }
      }
  
      return {
        name,
        email,
        phoneNumber,
        dateOfBirth,
        updateIdentity,
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
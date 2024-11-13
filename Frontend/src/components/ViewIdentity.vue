<!-- src/components/ViewIdentity.vue -->
<template>
    <div class="container my-4">
      <h2>Visualizar Identidade</h2>
      <button class="btn btn-primary mb-3" @click="fetchIdentity">Carregar Identidade</button>
      <div v-if="identity">
        <ul class="list-group">
          <li class="list-group-item"><strong>Nome:</strong> {{ identity.name }}</li>
          <li class="list-group-item"><strong>Email:</strong> {{ identity.email }}</li>
          <li class="list-group-item"><strong>Número de Telefone:</strong> {{ identity.phoneNumber }}</li>
          <li class="list-group-item"><strong>Data de Nascimento:</strong> {{ identity.dateOfBirth }}</li>
        </ul>
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
    name: 'ViewIdentity',
    setup() {
      const identity = ref(null)
      const errorMessage = ref('')
  
      const fetchIdentity = async () => {
        try {
          const contract = await initializeEthers()
          const data = await contract.getMyIdentity()
          identity.value = {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            dateOfBirth: data.dateOfBirth
          }
          errorMessage.value = ''
        } catch (error) {
          console.error('Erro ao buscar identidade:', error)
          errorMessage.value = error.reason || 'Falha ao buscar identidade.'
          identity.value = null
        }
      }
  
      return {
        identity,
        fetchIdentity,
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
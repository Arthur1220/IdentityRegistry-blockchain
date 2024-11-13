<!-- src/components/ConnectWallet.vue -->
<template>
    <div class="text-center my-4">
      <button class="btn btn-primary" @click="connectWallet">
        {{ isConnected ? `Conectado: ${shortAddress}` : 'Conectar MetaMask' }}
      </button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { ethers } from 'ethers'
  
  export default {
    name: 'ConnectWallet',
    setup() {
      const isConnected = ref(false)
      const account = ref('')
      const shortAddress = ref('')
  
      const connectWallet = async () => {
        if (window.ethereum) {
          try {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const accounts = await provider.send('eth_requestAccounts', [])
            account.value = accounts[0]
            shortAddress.value = `${account.value.slice(0, 6)}...${account.value.slice(-4)}`
            isConnected.value = true
  
            // Ouvir mudanças na conta
            window.ethereum.on('accountsChanged', (accounts) => {
              if (accounts.length > 0) {
                account.value = accounts[0]
                shortAddress.value = `${account.value.slice(0, 6)}...${account.value.slice(-4)}`
              } else {
                isConnected.value = false
                account.value = ''
                shortAddress.value = ''
              }
            })
          } catch (error) {
            console.error('Erro ao conectar MetaMask:', error)
          }
        } else {
          alert('Por favor, instale o MetaMask!')
        }
      }
  
      return {
        isConnected,
        connectWallet,
        shortAddress
      }
    }
  }
  </script>
  
  <style scoped>
  button {
    width: 200px;
  }
  </style>
  
// src/ethers.js
import { ethers } from 'ethers'
import IdentityRegistryABI from './abi/IdentityRegistry.json'

// Obter o endereço do contrato do arquivo .env
const contractAddress = import.meta.env.VUE_APP_CONTRACT_ADDRESS

let provider
let signer
let contract

// Função para inicializar o Ethers.js
export const initializeEthers = async () => {
  if (!contractAddress) {
    throw new Error('O endereço do contrato não está configurado. Verifique suas variáveis de ambiente.');
  }
  
  if (window.ethereum) {
    provider = new ethers.BrowserProvider(window.ethereum)
    signer = await provider.getSigner()
    contract = new ethers.Contract(contractAddress, IdentityRegistryABI.abi, signer)
    return contract
  } else {
    alert('Por favor, instale o MetaMask!')
    throw new Error('MetaMask não detectado')
  }
}

export { provider, signer, contract }
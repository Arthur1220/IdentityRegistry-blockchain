# Frontend - Carteira Digital de Identidade Básica

Este diretório contém a aplicação web desenvolvida em **Vue.js** que permite aos usuários interagir com o contrato inteligente **IdentityRegistry** na blockchain Ethereum.

## Sumário

- [Descrição](#descrição)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instruções para Execução](#instruções-para-execução)
  - [1. Instalação das Dependências](#1-instalação-das-dependências)
  - [2. Configuração do MetaMask](#2-configuração-do-metamask)
  - [3. Iniciar a Aplicação](#3-iniciar-a-aplicação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configurações Importantes](#configurações-importantes)
- [Possibilidades e Próximos Passos](#possibilidades-e-próximos-passos)
- [Recursos Adicionais](#recursos-adicionais)
- [Licença](#licença)


## Descrição

A aplicação web permite que os usuários:

- Conectem suas carteiras **MetaMask**.
- Registrem suas identidades digitais na blockchain.
- Visualizem suas identidades registradas.
- Atualizem suas identidades.
- Busquem identidades de outros usuários (quando permitido).

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- **Vue CLI** instalado globalmente
- **MetaMask** instalado no navegador

## Configuração do Ambiente

Certifique-se de que você tenha o **Node.js**, o **npm** e o **Vue CLI** instalados em sua máquina.

- Verifique o Node.js e npm:

  ```bash
  node -v
  npm -v
  ```

- Instale o Vue CLI (se ainda não o fez):

  ```bash
  npm install -g @vue/cli
  ```

## Instruções para Execução

### 1. Instalação das Dependências

No diretório `frontend/`, execute:

```bash
npm install
```

Isso instalará todas as dependências listadas no `package.json`, incluindo o **Vue.js** e o **ethers.js**.

### 2. Configuração do MetaMask

#### 2.1. Configurar a Rede Local no MetaMask

- Abra o MetaMask e adicione uma nova rede:

  - **Nome da Rede:** Localhost 8545
  - **RPC URL:** `http://127.0.0.1:8545`
  - **Chain ID:** `31337`
  - **Moeda:** ETH

#### 2.2. Importar Conta de Teste

- Copie uma das contas geradas pelo Hardhat (exibidas ao executar `npx hardhat node`).
- Importe a conta no MetaMask usando a chave privada correspondente.

**Atenção:** As chaves privadas das contas de teste são apenas para desenvolvimento local. Nunca use essas contas em redes públicas.

### 3. Iniciar a Aplicação

Inicie o servidor de desenvolvimento:

```bash
npm run serve
```

A aplicação estará disponível em `http://localhost:8080`.

**Nota:** Certifique-se de que o contrato inteligente está implantado na rede local e que o endereço do contrato está atualizado no arquivo `.env`.

## Estrutura do Projeto

```
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ConnectWallet.vue
│   │   ├── RegisterIdentity.vue
│   │   ├── ViewIdentity.vue
│   │   └── UpdateIdentity.vue
│   ├── App.vue
│   ├── main.js
│   ├── ethers.js
│   └── abi/
│       └── IdentityRegistry.json
├── public/
├── .env
├── package.json
├── package-lock.json
└── README.md
```

## Configurações Importantes

### Arquivo `.env`

Certifique-se de que o arquivo `.env` contém o endereço correto do contrato:

```env
VUE_APP_CONTRACT_ADDRESS=0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Substitua** `0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` pelo endereço do contrato implantado na rede local ou na testnet.

### Configuração do ethers.js

O arquivo `src/ethers.js` é responsável por inicializar o **ethers.js** e conectar-se ao contrato inteligente.

```javascript
import { ethers } from 'ethers';
import IdentityRegistryABI from './abi/IdentityRegistry.json';

const contractAddress = process.env.VUE_APP_CONTRACT_ADDRESS;

let contract;

export const initializeEthers = async () => {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    contract = new ethers.Contract(contractAddress, IdentityRegistryABI.abi, signer);
    return contract;
  } else {
    alert('Por favor, instale o MetaMask!');
    throw new Error('MetaMask não detectado');
  }
};

export { contract };
```

## Possibilidades e Próximos Passos

- **Melhorias na Interface do Usuário:**

  Aprimore o design utilizando bibliotecas como **Vuetify** ou **Tailwind CSS**.

- **Deploy em Produção:**

  Configure a aplicação para ser compilada e implantada em um ambiente de produção.

- **Integração com Testnets Públicas:**

  Atualize a configuração para conectar-se a uma testnet como **Goerli** ou **Rinkeby**.

- **Implementação de Funcionalidades Adicionais:**

  - Verificação de email e número de telefone via serviços externos.
  - Integração com armazenamento off-chain como **IPFS**.

## Recursos Adicionais

- **Vue.js Documentation:** [https://vuejs.org/guide/introduction.html](https://vuejs.org/guide/introduction.html)
- **Ethers.js Documentation:** [https://docs.ethers.io/v6/](https://docs.ethers.io/v6/)
- **MetaMask:** [https://metamask.io/](https://metamask.io/)
- **Bootstrap Documentation:** [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

# Frontend - Vue README

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

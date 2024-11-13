# Carteira Digital de Identidade Básica - IdentityRegistry Blockchain Project

Este projeto é uma **Carteira Digital de Identidade Básica** construída sobre a blockchain Ethereum. O objetivo é permitir que os usuários registrem, visualizem e atualizem suas identidades digitais de forma descentralizada, segura e privada. A aplicação consiste em duas partes principais:

1. **Blockchain (Smart Contract em Solidity)**
2. **Frontend (Aplicação Web em Vue.js)**

## Sumário

- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instruções de Configuração](#instruções-de-configuração)
  - [Blockchain](#blockchain)
  - [Frontend](#frontend)
- [Segurança e Privacidade](#segurança-e-privacidade)
- [Possibilidades e Próximos Passos](#possibilidades-e-próximos-passos)
- [Recursos Adicionais](#recursos-adicionais)
- [Licença](#licença)


## Visão Geral do Projeto

A **Carteira Digital de Identidade Básica** permite que os usuários gerenciem suas identidades digitais na blockchain Ethereum. Através da aplicação web, os usuários podem:

- **Registrar** sua identidade, incluindo nome, email, número de telefone e data de nascimento.
- **Visualizar** suas identidades registradas.
- **Atualizar** suas informações de identidade.
- **Pesquisar** identidades de outros usuários (quando permitido).

O projeto enfatiza a segurança e a privacidade, garantindo que informações sensíveis sejam protegidas e que apenas os proprietários possam modificar suas identidades.

## Funcionalidades Principais

- **Registro de Identidade:** Os usuários podem registrar suas identidades na blockchain.
- **Visualização de Identidade:** Permite que os usuários visualizem suas próprias identidades.
- **Atualização de Identidade:** Os usuários podem atualizar suas informações de identidade.
- **Proteção de Dados Sensíveis:** Implementa mecanismos para proteger informações sensíveis, como armazenamento off-chain e hashing.
- **Validação de Dados:** Verificação de formatos de email e número de telefone no frontend.
- **Conexão com MetaMask:** Utiliza MetaMask para autenticação e interação com a blockchain.

## Estrutura do Projeto

```
projeto/
├── blockchain/           # Contrato inteligente em Solidity e scripts Hardhat
│   ├── contracts/
│   ├── scripts/
│   ├── test/
│   ├── .gitignore
│   └── README.md
├── frontend/             # Aplicação web em Vue.js
│   ├── src/
│   ├── public/
│   ├── .gitignore
│   └── README.md
└── README.md             # Este arquivo README geral
```

## Pré-requisitos

- **Node.js e npm** instalados.
- **MetaMask** instalado no navegador.
- Conhecimento básico de **Solidity**, **JavaScript**, **Vue.js** e **Hardhat**.

## Instruções de Configuração

### Blockchain

As instruções detalhadas para configurar e executar a parte do blockchain estão disponíveis no arquivo [blockchain/README.md](blockchain/README.md).

### Frontend

As instruções detalhadas para configurar e executar a parte do frontend estão disponíveis no arquivo [frontend/README.md](frontend/README.md).

## Segurança e Privacidade

O projeto implementa várias medidas para garantir a segurança e a privacidade dos dados dos usuários:

- **Armazenamento Off-Chain:** Dados sensíveis são armazenados fora da blockchain, e apenas referências ou hashes são mantidos on-chain.
- **Hashing de Dados Sensíveis:** Emails, números de telefone e datas de nascimento são armazenados como hashes para proteger a privacidade.
- **Validação de Dados:** O frontend valida os formatos de email e número de telefone antes de enviar os dados.
- **Autenticação via MetaMask:** Garante que apenas os proprietários das contas possam interagir com suas identidades.

## Possibilidades e Próximos Passos

- **Deploy em Testnets Públicas:** Implantar o contrato inteligente em testnets como Goerli para testes mais amplos.
- **Melhorias na Interface do Usuário:** Aprimorar o design e a usabilidade da aplicação web.
- **Integração com Serviços Off-Chain:** Utilizar IPFS ou outros serviços para armazenamento seguro de dados.
- **Implementação de DIDs:** Integrar Identidades Descentralizadas para autenticação mais robusta.
- **Auditorias de Segurança:** Realizar auditorias para identificar e corrigir vulnerabilidades.

## Recursos Adicionais

- **Hardhat Documentation:** [https://hardhat.org/docs](https://hardhat.org/docs)
- **Ethers.js Documentation:** [https://docs.ethers.io/v6/](https://docs.ethers.io/v6/)
- **Vue.js Documentation:** [https://vuejs.org/guide/introduction.html](https://vuejs.org/guide/introduction.html)
- **MetaMask:** [https://metamask.io/](https://metamask.io/)
- **IPFS Documentation:** [https://docs.ipfs.io/](https://docs.ipfs.io/)
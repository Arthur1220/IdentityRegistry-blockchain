# Blockchain - Carteira Digital de Identidade Básica

Este diretório contém o código do contrato inteligente (**smart contract**) em Solidity, bem como scripts e testes utilizando o Hardhat.

## Sumário

- [Descrição](#descrição)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instruções para Execução](#instruções-para-execução)
  - [1. Instalação das Dependências](#1-instalação-das-dependências)
  - [2. Compilação do Contrato](#2-compilação-do-contrato)
  - [3. Execução dos Testes](#3-execução-dos-testes)
  - [4. Implantação na Rede Local](#4-implantação-na-rede-local)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configurações Importantes](#configurações-importantes)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Possibilidades e Próximos Passos](#possibilidades-e-próximos-passos)
- [Recursos Adicionais](#recursos-adicionais)
- [Licença](#licença)


## Descrição

O contrato inteligente **IdentityRegistry** permite que os usuários registrem, atualizem e visualizem identidades digitais na blockchain Ethereum. O contrato utiliza medidas de segurança para proteger informações sensíveis, como armazenamento de hashes em vez de dados brutos.

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- Conhecimento básico de **Solidity** e **Hardhat**

## Configuração do Ambiente

Certifique-se de que você tenha o **Node.js** e o **npm** instalados em sua máquina. Você pode verificar isso executando:

```bash
node -v
npm -v
```

## Instruções para Execução

### 1. Instalação das Dependências

No diretório `blockchain/`, execute:

```bash
npm install
```

Isso instalará todas as dependências listadas no `package.json`, incluindo o Hardhat e os plugins necessários.

### 2. Compilação do Contrato

Para compilar o contrato inteligente, execute:

```bash
npx hardhat compile
```

Você deve ver uma saída indicando que a compilação foi bem-sucedida.

### 3. Execução dos Testes

Para executar os testes escritos em `test/IdentityRegistry.test.js`, execute:

```bash
npx hardhat test
```

**Saída Esperada:**

```
  IdentityRegistry
    ✔ Should register a new identity
    ✔ Should not allow to register identity twice
    ✔ Should update an existing identity
    ✔ Should not allow updating non-existing identity
    ✔ Should retrieve identity of another user

  5 passing (X.Xs)
```

### 4. Implantação na Rede Local

#### 4.1. Iniciar o Nó Local do Hardhat

Em um terminal, inicie o nó local:

```bash
npx hardhat node
```

#### 4.2. Implantar o Contrato

Em outro terminal, execute o script de deploy:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

**Saída Esperada:**

```
IdentityRegistry deployed to: 0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Anote o endereço do contrato para uso posterior.

## Estrutura do Projeto

```
blockchain/
├── contracts/
│   └── IdentityRegistry.sol
├── scripts/
│   └── deploy.js
├── test/
│   └── IdentityRegistry.test.js
├── artifacts/
├── cache/
├── hardhat.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Configurações Importantes

### hardhat.config.js

O arquivo de configuração do Hardhat:

```javascript
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
};
```

Certifique-se de que as versões das dependências estão atualizadas e compatíveis com o `ethers.js` v6.

## Scripts Disponíveis

- **Compile o Contrato:**

  ```bash
  npx hardhat compile
  ```

- **Execute os Testes:**

  ```bash
  npx hardhat test
  ```

- **Inicie o Nó Local:**

  ```bash
  npx hardhat node
  ```

- **Execute o Script de Deploy:**

  ```bash
  npx hardhat run scripts/deploy.js --network localhost
  ```

## Possibilidades e Próximos Passos

- **Deploy em Testnets Públicas:**

  Atualize o `hardhat.config.js` com as configurações da testnet desejada e implante o contrato.

- **Auditoria de Segurança:**

  Utilize ferramentas como **Slither** ou **MythX** para analisar o contrato em busca de vulnerabilidades.

- **Expansão de Funcionalidades:**

  Adicione novas funcionalidades ao contrato, como suporte a DIDs ou integração com outros contratos.

## Recursos Adicionais

- **Hardhat Documentation:** [https://hardhat.org/docs](https://hardhat.org/docs)
- **Ethers.js Documentation:** [https://docs.ethers.io/v6/](https://docs.ethers.io/v6/)
- **Solidity Documentation:** [https://docs.soliditylang.org/](https://docs.soliditylang.org/)
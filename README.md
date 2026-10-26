# Projeto de Automação de Testes - ServeRest

Este projeto tem como objetivo o mapeamento, documentação e validação dos cenários de testes de Back-end (API) e Front-end (UI) utilizando a plataforma ServeRest, cobrindo tanto a abordagem de testes manuais quanto testes automatizados.

## 🛠️ Ferramentas Utilizadas

* **Jira:** Gestão, planejamento e organização das tarefas em formato ágil.
* **Postman:** Execução de testes manuais e validação de contratos de API.
* **Gherkin / BDD:** Escrita de cenários de teste focados no comportamento do usuário.
* **Cypress:** Framework de automação utilizado para a execução dos testes de ponta a ponta (E2E).
* **Cucumber:** Pré-processador que conecta os cenários escritos em Gherkin ao código automatizado em Cypress.
* **Git / GitHub:** Versionamento de código e fluxo de revisão via Pull Requests.

## 🗂️ Estrutura do Projeto de Automação

```text
├── Registro backend/          # Arquivos manuais (JSON, Gherkin original do Back)
├── Registro frontend/         # Arquivos manuais (Evidências, Gherkin original do Front)
└── cypress/                   # Diretório dos testes automatizados
    ├── e2e/                   # Cenários de teste automatizados
    │   ├── backend/           # Testes de API (Cypress puro / BDD)
    │   └── frontend/          # Testes de Interface Web (BDD + Cucumber)
    └── support/               # Arquivos de suporte e comandos customizados
```

## 🚀 Como Executar os Testes Automatizados

Antes de começar, certifique-se de que possui o [Node.js](https://nodejs.org) instalado em sua máquina.

### 1. Instalar as dependências do projeto
Abra o terminal na raiz do projeto e execute o comando abaixo para baixar o Cypress e o Cucumber:
```bash
npm install
```

### 2. Abrir a interface visual do Cypress
Para abrir o painel interativo e selecionar os testes manualmente pelo navegador, execute:
```bash
npx cypress open
```
*Após abrir a janela, selecione **E2E Testing**, escolha o seu navegador (ex: Chrome) e clique em cima de um arquivo `.feature` ou `.cy.js` para rodar.*

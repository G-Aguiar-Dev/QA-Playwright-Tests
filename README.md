# Testes End-to-End com Playwright

[![CI](https://github.com/G-Aguiar-Dev/QA-Playwright-Tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/G-Aguiar-Dev/QA-Playwright-Tests/actions/workflows/playwright.yml)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/license/isc-license-txt)

Projeto de automação de testes end-to-end para o [SauceDemo](https://www.saucedemo.com/), desenvolvido com Playwright, TypeScript e Page Object Model. O foco é demonstrar uma base sólida de testes automatizados com estrutura clara, execução cross-browser e suporte a relatórios para depuração.

## Sobre o projeto

Este repositório apresenta fluxos automatizados de autenticação e compra, com geração de evidências em caso de falha para apoiar troubleshooting (Trace, Vídeo do teste e Screenshot do erro), além de integração com GitHub Actions. A proposta é servir como peça de portfólio, mostrando organização, legibilidade e boas práticas de automação.

## Cenários cobertos

- Login com sucesso.
- Login com usuário bloqueado.
- Validação de mensagens de erro.
- Fluxo completo de compra, do login à confirmação do pedido.

## Estrutura do projeto

```text
.
├── .github/workflows/
│   └── playwright.yml
├── pages/                     # Page Objects
│   ├── cartPage.ts
│   ├── checkoutCompletePage.ts
│   ├── checkoutOverviewPage.ts
│   ├── checkoutPage.ts
│   ├── inventoryPage.ts
│   └── loginPage.ts
├── tests/
│   ├── purchase_flow.spec.ts
│   ├── login.spec.ts
├── fixtures/
│   └── users.json             # dados de teste (usuários, senhas)
├── playwright.config.ts
├── package.json
├── .gitignore
├── README.md
└── (relatórios gerados: playwright-report/, test-results/)
```

## Requisitos

- Node.js instalado.
- Dependências do projeto instaladas.
- Navegadores do Playwright instalados localmente.

## Como executar localmente

```bash
npm install
npx playwright install
npx playwright test
```

## Modo interativo

Para abrir a interface do Playwright e executar os testes com seleção visual, use:

```bash
npx playwright test --ui
```

Isso abre a UI interativa do Playwright, útil para depurar testes, inspecionar execuções e navegar pelos cenários de forma visual.

## Relatórios

Após a execução, abra o relatório HTML com:

```bash
npx playwright show-report
```

## Integração contínua

O GitHub Actions executa os testes automaticamente em `push` e `pull request` nas branches principais.

## Conhecimentos demonstrados

- Automação de testes end-to-end com Playwright.
- Uso de TypeScript em testes e Page Objects.
- Organização do código com Page Object Model.
- Validação de fluxos de autenticação e mensagens de erro.
- Cobertura de um fluxo de compra completo com navegação entre páginas.
- Uso de objetos de página para ações reutilizáveis em login, carrinho e checkout.
- Execução cross-browser com suporte a múltiplos navegadores.
- Geração de evidências para depuração e troubleshooting com trace, vídeo e screenshot quando o teste falha.
- Integração contínua com GitHub Actions.

## Licença

Este projeto está sob a licença ISC.

Este projeto é fornecido como portfólio de testes de performance e qualidade de software.
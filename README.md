# Next.js Architecture Demo

Este repositório representa meu **setup inicial padrão para projetos em React e Next.js**, focado em **boas práticas**, **qualidade de código** e **escalabilidade desde o primeiro commit**.

> ⚠️ **Status do projeto**  
> Este repositório é voltado para **estudos e experimentação de boas práticas**.  
> Ele está **em construção** e em **constante evolução**, servindo também como documentação viva dos meus aprendizados.

---

## Objetivo

Sempre que inicio um projeto em Next.js, minha prioridade é garantir:

- previsibilidade
- qualidade
- escalabilidade
- boa experiência de desenvolvimento (DX)

A ideia é que o projeto **rode igual para todo mundo**, em qualquer ambiente, evitando:

- bugs de configuração
- divergência de versões
- retrabalho
- acoplamento arquitetural precoce

---

## Base técnica do projeto

Este setup contempla, desde o início:

### Qualidade e padronização

- **ESLint + Prettier + EditorConfig**  
  Padrão de código consistente em todo o time.

### Qualidade automatizada no fluxo de commits

- **Husky + Lint-staged + Commitlint**  
  Garantia de qualidade antes de cada commit e push.

### Testes

- **Jest + React Testing Library**  
  Testes unitários e de componentes.
- **Cypress**  
  Testes end-to-end (E2E).

> Obs: o Jest está configurado para não falhar caso ainda não existam testes, facilitando a evolução incremental do projeto.

### Design System e documentação

- **Storybook**  
  Isolamento, documentação e validação visual de componentes.

### Ambiente e consistência

- **.nvmrc**  
  Versão única do Node.js.
- **Docker (Dockerfile + Docker Compose)**  
  Ambiente previsível do desenvolvimento ao deploy.

### Configuração segura

- **.env.example**
- **Validação de variáveis de ambiente com Zod**  
  Configuração explícita, segura e previsível.

### CI

- Pipeline com:
  - lint
  - test
  - build  
    Garantindo qualidade desde o primeiro PR.

---

## Arquitetura e organização

Para aplicações médias e grandes, utilizo **Feature Slice Design (FSD)** / **feature-based architecture**.

### Por quê?

- Escala melhor com o crescimento do projeto
- Aproxima o código do domínio de negócio
- Reduz acoplamento entre partes não relacionadas
- Facilita manutenção e onboarding

### Princípios adotados

- Cada **feature é autossuficiente**
- Tudo que é **realmente reutilizável** vive em `shared`
- Dependências seguem regras claras de direção

---

## Extras que fazem diferença

- Regras de arquitetura no **ESLint** (ex: `import/boundaries`)
- Tokens de design e contratos bem definidos
- Documentação objetiva (`README`, `CONTRIBUTING`)
- Observabilidade básica (logs, error tracking)

---

## Sobre este repositório

Este repositório **não representa um produto final**, mas sim:

- um **laboratório de arquitetura**
- um **guia prático de boas práticas**
- uma **documentação dos meus estudos e decisões técnicas**

Mudanças, refatorações e ajustes fazem parte do processo.

---

## Em evolução

Novas features, melhorias arquiteturais e ajustes de tooling serão adicionados continuamente conforme os estudos avançam.

Se algo mudar, é intencional 🙂

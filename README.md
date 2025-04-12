# Blog Pessoal - Projeto FullStack

![Preview da Aplicação](public/vite.svg)

## 📌 Visão Geral
Blog pessoal completo com sistema de autenticação e CRUD para postagens e temas.

## 🛠 Tecnologias
- **Frontend**: 
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

- **Backend**: 
  [API REST](https://blog-pessoal-generation-pnkr.onrender.com)

## ✨ Funcionalidades
### 🔐 Autenticação
- Login de usuário
- Cadastro de novos usuários
- Persistência de sessão

### 📝 Postagens
- Criação de novas postagens
- Listagem de todas postagens
- Edição de postagens existentes
- Exclusão de postagens

### 🏷 Temas
- Criação de novos temas
- Listagem de todos temas
- Edição de temas existentes
- Exclusão de temas

## 🚀 Como Executar
```bash
# Instalar dependências
yarn install

# Executar em modo desenvolvimento
yarn dev

# Build para produção
yarn build
```

## 📂 Estrutura de Arquivos
```
src/
├── components/    # Componentes reutilizáveis
├── contexts/      # Contextos da aplicação
├── models/        # Interfaces TypeScript
├── pages/         # Páginas da aplicação
├── services/      # Configurações de API
└── ...
```

## 🌐 Endpoints da API
| Método | Endpoint       | Descrição               |
|--------|----------------|-------------------------|
| POST   | /usuarios/cadastrar | Cadastro de usuário |
| POST   | /usuarios/logar | Login de usuário |
| ...    | ...            | ...                   |

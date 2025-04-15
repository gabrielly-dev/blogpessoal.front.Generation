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
  [API REST](https://blog-pessoal-generation-pnkr.onrender.com),
  [PROJETO GITHUB](https://github.com/gabrielly-dev/blog-pessoal.generation)

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
├── components/    
│   ├── footer/            # Componentes do rodapé
│   ├── navbar/            # Componentes da barra de navegação
│   ├── postagens/         # Componentes relacionados a postagens
│   │   ├── cardpostagens/     # Cartões de exibição de postagens
│   │   ├── deletarpostagem/   # Componentes para deletar postagens
│   │   ├── formpostagem/      # Formulários para criação/edição de postagens
│   │   ├── listapostagens/    # Listagem de postagens
│   │   └── modalpostagem/     # Modal para criação/edição de postagens
│   ├── temas/              # Componentes relacionados a temas
│   │   ├── cardtemas/         # Cartões de exibição de temas
│   │   ├── deletartema/       # Componentes para deletar temas
│   │   ├── formtema/          # Formulários para criação/edição de temas
│   │   └── listatemas/        # Listagem de temas
├── contexts/              # Contextos da aplicação (ex: autenticação)
├── models/                # Interfaces TypeScript para dados
├── pages/                 # Páginas da aplicação
│   ├── cadastro/            # Página de cadastro de usuários
│   ├── home/                # Página inicial
│   ├── login/               # Página de login
│   └── perfil/              # Página de perfil do usuário
├── services/              # Configurações e chamadas da API
└── utils/                 # Utilitários e funções auxiliares
```

## 🌐 Endpoints da API
| Método | Endpoint           | Descrição               |
|--------|--------------------|-------------------------|
| POST   | /usuarios/cadastrar | Cadastro de usuário     |
| POST   | /usuarios/logar     | Login de usuário        |
| GET    | /postagens         | Listar todas postagens  |
| POST   | /postagens         | Criar nova postagem     |
| PUT    | /postagens/:id     | Atualizar postagem      |
| DELETE | /postagens/:id     | Deletar postagem        |
| GET    | /temas             | Listar todos temas      |
| POST   | /temas             | Criar novo tema         |
| PUT    | /temas/:id         | Atualizar tema          |
| DELETE | /temas/:id         | Deletar tema            |

## 📜 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📱 Redes Sociais
Siga-me nas redes sociais:

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/gabrielly.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabrielly-dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gabrielly-dev)

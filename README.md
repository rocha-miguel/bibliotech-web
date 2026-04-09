# Bibliotech Web 📚

Bem-vindo ao repositório do **Bibliotech Web**, uma aplicação de front-end desenvolvida em Angular para o gerenciamento de livros (cadastro, listagem, atualização e busca por ID). 

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e bibliotecas essenciais:

* **[Angular](https://angular.dev/) (v21)** - Framework principal para a construção da interface de usuário.
* **[Bootstrap](https://getbootstrap.com/) (v5)** - Framework CSS para estruturação responsiva e componentes estilizados rapidamente.
* **[Bootstrap Icons](https://icons.getbootstrap.com/)** - Biblioteca de ícones integrada.
* **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática e recursos avançados para o JavaScript.

## ⚙️ Funcionalidades

A aplicação possui os seguintes recursos com foco no gerenciamento de um catálogo (CRUD de Livros):

- **Página Inicial (Home)**: Visão geral ou apresentação do Bibliotech.
- **Listagem Geral de Livros**: Exibe todos os livros disponíveis no sistema.
- **Consulta de Detalhes (Listar por ID)**: Busca e exibe os detalhes de um livro específico.
- **Cadastro (Cadastrar)**: Adição de novos livros ao acervo da biblioteca.
- **Edição (Atualizar)**: Atualização das informações e dados de um livro já existente.

## 🛠️ Como executar o projeto localmente

### Pré-requisitos
* Ter instalado o [Node.js](https://nodejs.org/pt-br) na máquina.

### Passos para a execução

1. Clone o repositório na sua máquina:
   ```bash
   git clone <URL-DO-REPOSITORIO>
   ```

2. Acesse a pasta raiz do projeto:
   ```bash
   cd bibliotech-web
   ```

3. Instale todas as dependências requeridas utilizando o NPM:
   ```bash
   npm install
   ```

4. Inicialize o servidor de desenvolvimento do Angular:
   ```bash
   npm start
   ```

5. Abra o seu navegador e acesse a aplicação em: 
   👉 **http://localhost:4200/**.  
   *(A aplicação será recarregada automaticamente toda vez que houver uma alteração no código fonte)*

## 🏗️ Como gerar o Build de Produção

Para compilar a aplicação e gerar os arquivos otimizados prontos para deploy ou distribuição de produção, rode o comando:

```bash
npm run build
```

Os arquivos estáticos minificados e otimizados serão gerados dentro do diretório `dist/`.


> _Projeto gerado inicialmente com o [Angular CLI](https://github.com/angular/angular-cli) versão 21.2.3._

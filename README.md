# Catálogo de Caligrafia

Este projeto é parte de um trabalho acadêmico desenvolvido na disciplina de Desenvolvimento Web, com o objetivo de construir uma aplicação completa que envolva tanto o frontend em ReactJS quanto uma API REST simulada utilizando JSON Server. A aplicação simula o funcionamento de um pequeno catálogo para produtos relacionados à caligrafia artística.

## Objetivo

Criar uma aplicação web que permita cadastrar, listar e excluir produtos de três categorias: canetas-tinteiro, tintas e selos de cera. Cada item tem características próprias, podendo incluir imagens no caso das canetas. O projeto aplica na prática conceitos como:

- Estruturação de uma SPA com ReactJS
- Organização de rotas e páginas
- Consumo e simulação de APIs REST
- Manipulação de estado com useState e useEffect
- Estilização com TailwindCSS
- Upload e exibição de imagens em Base64

## Tecnologias Utilizadas

### Frontend

- ReactJS com Vite
- React Router DOM para navegação entre páginas
- Axios para requisições HTTP
- TailwindCSS para estilização
- Imagens em Base64 para upload de canetas
- Organização modular com componentes reutilizáveis

### Backend (API REST)

- JSON Server como API simulada
- Banco de dados em arquivo `db.json`
- Endpoints REST para canetas, tintas e selos

## Estrutura do Projeto

### Frontend

- `src/pages` – páginas principais como Home, Cadastro e Listagem
- `src/components` – componentes reutilizáveis como formulários e visualizações
- `public/assets` – imagens estáticas como floreios e elementos visuais

### Backend

- `db.json` – base de dados simulada com:
  - 10 canetas
  - 5 tintas
  - 1 selo

## Funcionalidades

### Cadastro

- O formulário se adapta de acordo com a categoria escolhida.
- Para canetas, é possível enviar uma imagem, que será convertida em Base64 e exibida posteriormente.
- Após o cadastro, todos os campos do formulário são limpos.

### Listagem

- Os produtos são agrupados por marca.
- Cada produto possui:
  - Nome, marca, descrição e preço
  - Características específicas da categoria
  - Canetas exibem tipo e tamanho da pena
- As imagens das canetas podem ser mostradas ou ocultadas com um botão.
- É possível excluir individualmente qualquer item.

### Interface

- Visual baseado em estética vintage (marrom, amarelo envelhecido)
- Fontes e floreios decorativos remetem à escrita caligráfica tradicional
- O layout é responsivo e agradável em dispositivos desktop

## Imagens e Direitos

- As imagens das canetas foram retiradas do Google Imagens exclusivamente para fins educacionais e não comerciais.
- Os floreios decorativos foram baixados gratuitamente do site http://www.freepik.com e tiveram suas cores modificadas para se adequar à paleta do projeto.
- Nenhum material é utilizado com finalidade de distribuição pública ou comercial.

## Como Executar o Projeto

### 1. Clonar o repositório

```
git clone https://github.com/OliveiraCheres/TrabalhoFinalDevWeb.git
cd catalogo-caligrafia
```

### 2. Instalar as dependências

```
npm install
```

### 3. Iniciar a API (JSON Server)

```
npm run json-server
```

O servidor será iniciado na porta 3001.

### 4. Iniciar o frontend

Em outro terminal, execute:

```
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Endpoints Disponíveis

- `GET /canetas` – lista todas as canetas
- `POST /tintas` – cadastra uma nova tinta
- `DELETE /selos/:id` – remove um selo pelo ID

## Observações Acadêmicas

Este projeto foi desenvolvido individualmente por Bruno, aluno do curso de Engenharia de Computação, como parte da entrega da disciplina de Desenvolvimento Web. Todo o conteúdo foi criado com finalidade educacional e não possui fins lucrativos ou comerciais.

## Data de Entrega

23 de junho de 2025

## Contato

Para dúvidas ou sugestões:

Email: oliveiracheres@email.com  
GitHub: https://github.com/OliveiraCheres

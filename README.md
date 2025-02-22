# Trato Tech

Trato Tech é uma loja virtual desenvolvida utilizando Next.js, Redux para gerenciamento de estado, e Sass para estilização. Este projeto foi concebido com foco em responsividade e uma experiência de usuário intuitiva.

## Visão Geral do Projeto

### Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **Redux**: Biblioteca para gerenciamento de estado da aplicação.
- **Sass**: Pré-processador CSS que permite usar variáveis, aninhamento, mixins, herança e mais.
- **React Hook Form**: Biblioteca para manipulação de formulários de forma eficiente.
- **Responsividade**: O layout do site é totalmente responsivo e adaptável a diferentes tamanhos de tela.

### Estrutura do Projeto

#### Diretório de Componentes

- **Navbar**: Barra de navegação principal.
- **Input**: Componente de campo de entrada de texto.
- **CampoTexto**: Componente de área de texto.
- **Footer**: Rodapé do site.
- **CardItens**: Cartões que exibem os itens da loja.

#### Diretório de Gerenciamento de Estado (Store)

- **index.js**: Ponto de entrada principal para o Redux Store.
- **Reducers**:
  - **Busca**: Gerencia o estado relacionado às buscas na loja.
  - **Categorias**: Gerencia o estado das categorias de produtos.
  - **Itens**: Gerencia o estado dos itens disponíveis na loja.
  - **Carrinho**: Gerencia o estado do carrinho de compras.

### Páginas

- **Página de Categoria**: Página dinâmica que exibe produtos de uma categoria específica. A URL segue o formato `/categoria/[categoriaId]`.
- **Página de Carrinho**: Página que exibe os itens adicionados ao carrinho de compras. A URL é `/carrinho`.

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/trato-tech.git#   T r a t o - t e c h  
 
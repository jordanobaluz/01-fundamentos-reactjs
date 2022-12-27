![](https://media2.giphy.com/media/D4yhZWjglB8ms51BSQ/giphy.gif)

# Ignite Feed

Este é um projeto clone de rede social desenvolvido com React JS, CSS e outras tecnologias. O projeto permite que os usuários façam publicações e respondam às publicações, além de darem like nos comentários.

## Tecnologias utilizadas

- [React JS](https://reactjs.org/) - biblioteca JavaScript para criar interfaces de usuário
- [Vite](https://vitejs.dev/) - servidor de desenvolvimento rápido para aplicações web com suporte a módulos ECMAScript
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - linguagem de estilo utilizada para estilizar o projeto
- [CSS Modules](https://github.com/css-modules/css-modules) - sistema de gerenciamento de estilos que permite a criação de arquivos CSS modulares
- [date-fns](https://date-fns.org/) - biblioteca de funções de data em JavaScript
- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) - conjunto de ícones de código aberto para React
- [date-fns/locale/pt-BR](https://date-fns.org/v2.16.1/docs/I18n) - pacote de idioma português do Brasil para date-fns
- [ESLint](https://eslint.org/) - linter para JavaScript que ajuda a manter um padrão de código consistente e a identificar problemas de estilo e possíveis erros

## Técnicas utilizadas

- Estilização com CSS Modules: utilizamos o CSS Modules para isolar o estilo dos componentes e evitar conflitos de nomes.
- Propriedades e Estado: os componentes foram desenvolvidos seguindo o padrão de projeto de componentes do React, utilizando propriedades (props) para receber dados do componente pai e estado (state) para armazenar informações que podem ser alteradas pelo próprio componente.
- Validação de formulários com atributos HTML: utilizamos os atributos `required`, `pattern` e `onInvalid` para validar os formulários do projeto.
- Listas: foi utilizado o método map para percorrer os itens de uma lista e gerar elementos HTML de acordo com o conteúdo de cada item. Isso foi utilizado tanto para exibir os comentários quanto para exibir o conteúdo do post.

## Instalação e uso

1. Clone este repositório para a sua máquina
2. Instale as dependências:
   ```bash
   npm install
3. Inicie o projeto:
    ```bash
    npm run dev
4. O projeto será aberto automaticamente em seu navegador padrão. Qualquer alteração que você fizer no código será refletida automaticamente na página aberta.
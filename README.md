# Desestresse 🧘🏾🧘🏾
## Projeto criado para aliviar um pouco do estresse do dia a dia, com foto de cachorros e piadas!

## Esse projeto conta com a utilização de duas API's uma de piadas e a outra é a que retorna as imagens de cachorros.
### API's utilizadas 
### 1 -> https://dog.ceo/dog-api/breeds-list API de imagens de dog's
### 2 -> https://v2.jokeapi.dev/ API de piadas (en)

Olá pessoal, gostaria de mostrar para vocês um pouco do que utilizei neste projeto onde dei uma brincada com a API de imagens de dog's e JokeAPI.

Neste documento vou falar sobre, como rodar o projeto e pontuar algumas das minhas decisões sobre o projeto que julgo válidas.

## Introdução

Desenvolvendo este projeto foquei nos seguintes pontos que julgo cruciais para todo projeto:

- Ter um versionamento bem documentado, com commits claros e explicativos.
- Desenvolver um código legível, organizado e de fácil manutenção seguindo boas práticas e padrões de código limpo.
- Buscando ter uma UI responsiva e uma UX fluída, acessível para todos os dispositivos.
- Criar um projeto escalável, bem componentizado e com uma boa estrutura de arquivos.

## Principais ferramentas utilizadas

- React.js
- Axios
- React Router Dom
- Styled components

## Arquitetura

- Sobre arquitetura de pastas, o projeto segue uma estrutura básica, onde:
  - [components](https://github.com/samuelrms/projeto-desestresse/tree/main/src/components): arquivos de componentes reutilizáveis.
  - [screens](https://github.com/samuelrms/projeto-desestresse/tree/main/src/screens): páginas da aplicação.
  - [routes](https://github.com/samuelrms/projeto-desestresse/tree/main/src/Routes): todas as rotas, separadas em autenticadas e não autenticadas
  - [styles](https://github.com/samuelrms/projeto-desestresse/tree/main/src/styles): arquivo de tema global.
  - [mocks](https://github.com/samuelrms/projeto-desestresse/tree/main/src/mocks): arquivo que contém todos os dados mockados da alicação.

## Rodando o projeto
```
npm i
```
**Para instalar as dependências do projeto.**

<br>


```
npm start
```
**Para rodar o projeto em modo de desenvolvimento.**

<br>

```
npm build
```
**Para fazer o build do projeto para produção.**

## Desenvolvimento 

Desenvolvi o projeto como uma brincadeira para poder utilizar as **___API'S___** do **___API de imagens de dog's___** e **___JokeAPI___**, o consumo da **___API___** utilizei o **___AXIOS___** e para estilização utilizei o **___Styled components___**. 

## Link page https://samuelrms.github.io/projeto-desestresse

## Home
![image](https://user-images.githubusercontent.com/92615688/172452780-6af7cafe-aee0-4211-aad9-3b66c7ae3822.png)
![image](https://user-images.githubusercontent.com/92615688/172452857-feec7699-36b9-443e-a141-5f38f0dd8695.png)

## Pouco estressado
![image](https://user-images.githubusercontent.com/92615688/172453032-1a49dcdf-226e-4dde-a878-9c9a09afa927.png)

## Estressado
![image](https://user-images.githubusercontent.com/92615688/172453132-681359c4-8b7f-4abd-abdb-cef414dab685.png)

## Muito estressado
![image](https://user-images.githubusercontent.com/92615688/172453263-c1690713-51bb-42db-b13f-7514e20aec8a.png)

## Conclusão

Gostaria de agradecer a você que leu até aqui! Espero que goste do projeto :)

Good coding!



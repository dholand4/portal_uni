# portal_uni

## Sobre

O **portal_uni** e um aplicativo mobile simples feito para centralizar os principais acessos da universidade em um unico lugar.

Ele reune links academicos e contatos de atendimento em uma interface direta, pensada para uso rapido no celular.

---

## Como funciona

O app possui uma tela inicial com os acessos principais da universidade, como:

- Site institucional
- AVA
- Portal do Aluno
- SGA
- Biblioteca

Tambem existe uma tela de contatos com setores de atendimento, como:

- Whatsapp Oficial da Uni
- FIES e ProUni
- Financeiro e Bolsas
- CEAD
- Graduacao Digital
- Pos-Graduacao
- Extensao e NAARTE

Ao tocar em um item, o conteudo abre dentro do aplicativo usando `WebView`.

Na tela do `WebView`, o usuario pode:

- navegar normalmente dentro do site
- usar o botao fisico do Android para voltar paginas do proprio site
- usar o botao `<` do topo para voltar para a tela anterior do app
- abrir o link no navegador externo pelo menu de tres pontinhos

---

## Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- Styled-Components
- React Navigation
- React Native WebView
- React Native Safe Area Context

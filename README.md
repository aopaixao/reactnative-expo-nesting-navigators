# Descrição
Aplicativo Mobile React Native/Expo para demonstração da utilização de navegação aninhada e navegação condicional com o uso da API de Contexto.

## Dependências

* Verificar o package.json

## Instalação

```bash
git clone git@github.com:aopaixao/reactnative-expo-nesting-navigators.git
cd reactnative-expo-nesting-navigators/
npx npm install
npx expo start
```

## Funcionalidades implementadas

* Verificação do status do aplicativo com uso do AppState (checa se o app está aberto ou não)
* Navegação aninhada utilizando três componentes: stack, bottom tabs e drawer
* Navegação pública/privada a partir da checagem da autenticação do usuário (com API de Contexto)
* Navegação forçada para a screen inicial do componente de navegação drawer (acessado via bottom tabs)
* Utilização de item customizado (botão SignOut) como screen do componente de navegação drawer

## Sobre

- Author - [Alexandre Paixão]

## Licença

GNU GPL
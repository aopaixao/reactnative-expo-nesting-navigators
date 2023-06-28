# Descrição
Aplicativo Mobile React Native/Expo para demonstração da utilização de navegação aninhada e navegação condicional com o uso da API de Contexto.

## Dependências

* Verificar o package.json

## Instalação

```bash
/roles (criação de roles)
/auth/signup (criação de usuários)
/auth/signin (login de usuários)
```

## Endpoints Principais - Negócios

```bash
/autores 
/editoras
/livros
/livros/por-editora/{id}
```

### Endpoints com Paginação

* Os parâmetros pagina e qtdRegistros são números inteiros
* Os parâmetros acima são opcionais
* A paginação se inícia na página 0
* Os valores dos parâmetros deverão ser modificados de acordo com os registros que se deseja obter

```bash
/editoras?pagina=0&qtdRegistros=2
/livros?pagina=0&qtdRegistros=2
/livros/por-editora/{id}?pagina=0&qtdRegistros=2
```

## Endpoints - Coleção de todos os Endpoints para Insomnia

```bash
Insomnia_Endpoints_Collection.json
```

## Executando

```bash
mvnw spring-boot:run
```

## Sobre

- Author - [Alexandre Paixão]

## Licença

GNU GPL
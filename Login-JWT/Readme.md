<h1  align="center"> 🔐 Login-JWT</h1>

<p  align="center"> <a  href="#sobre">Sobre</a> • <a  href="#layout">Layout</a>• <a  href="#aplicacao">Aplicação</a> • <a  href="#techs">Tecnologias</a> • <a  href="#autor">Autor</a> • <a  href="#licenca">Licença</a> </p>


<h2  id="sobre"> 📋 Sobre o projeto</h2>

Projeto que consiste em um uma forma de login sendo admin ou não, e você somente consegue ser admin se no banco de dados a autorização de admin for true.

- Se você for admin tem uma rota e somente com o token você consegue acessa-la, de outra forma não consegue
- Se você for um usuário normal você conseguindo logar você possui uma rota chamada (free) que só consegue entrar quem tiver logado se não tiver não consegue entrar.
- Quando vc se registra ele criptografa a senha, assim sendo mais difícil de conseguirem hackear.
- Se você tentar fazer o login e erra a senha ou o e-mail ele te manda um erro falando e-mail ou senha errado sendo assim mais difícil da pessoa conseguir saber o que esta errado para não conseguir hackear.


<h2  id="layout"> 🎨 Layout </h2>

![login-jwt](https://user-images.githubusercontent.com/79159487/122551838-859bed80-d003-11eb-833d-234ab9fa81e7.gif)


<h2 id="aplicacao"> 🎲  Rodando essa aplicação: </h2>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:  [Git](https://git-scm.com/),  [Node.js](https://nodejs.org/en/), [Insomnia](https://insomnia.rest/), [MongoDB](https://www.mongodb.com/try/download/community). Além disto é bom ter um editor para trabalhar com o código como  [VSCode](https://code.visualstudio.com/)

```
# Clone este repositório
$ git https://github.com/wesleywisch/Repositorio-MongoDB.git

# É necessario ter o MongoDB baixado
$ https://www.mongodb.com

# É necessario ter o insomnia baixado
$ https://insomnia.rest/

# atenção no mongoose.connect(), que se localiza no app.js, é preciso da connection string gerado pelo mongo atlas

# Acesse a pasta do projeto no terminal
$ cd Login-JWT

# Instale as dependências
$ npm install

# Execute a aplicação
$ node app.js

$ Ai no insomnia você irá fazendo as requisições conforme a necessidade
```

<h2  id="techs"> 💻 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [NodeJs]()
- [Mongoose]()
- [Express]()
- [jsonwebtoken]()
- [joi]()
- [bcryptjs]()
- [JavaScript]()

<h2  id="autor"> 🦸 Autor</h2>

[Wesley Wisch](https://www.linkedin.com/in/wesley-wisch)

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square-border&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wesley-wisch/)](https://www.linkedin.com/in/wesley-wisch) [![Instagram Badge](https://img.shields.io/badge/-Instagram-CC0000?style=flat-square-border&logo=Instagram&logoColor=white&link=https://www.instagram.com/wesley_wisch/)](https://www.instagram.com/wesley_wisch/) [![wesley_wisch@hotmail.com Bagde](https://img.shields.io/badge/wesley_wisch-2e7eea?style=flat-square-border&logo=microsoft-outlook&logoColor=white)](mailto:wesley_wisch@hotmail.com)

<h2  id="licenca"> ⚠️ Licença</h2>

Esse projeto esta sobre a licença [MIT](https://github.com/wesleywisch/Repositorio-MongoDB/blob/main/LICENSE).
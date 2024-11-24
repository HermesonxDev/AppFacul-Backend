
# Como iniciar a aplicação

1 - Clone o repositorio.

2 - Instale as dependencias usando "yarn install" ou "npm install".

3 - Copie o arquivo .env.example, dele o ".example" e preencha os dados que ele pede.

4 - Digite "yarn dev" ou "npm dev" para iniciar a aplicação.

OBS: Para o front-end funcionar corretamente essa aplicação deve estar rodando.

# O que acontece em seguida?

A aplicação criará um banco do tipo sqlite, e abrirá as rotas para serem acessadas pelo frontend, caso não ocorra desse banco ser criado digite os seguintes comandos abaixo no terminal

"ls -ld ." e "chmod -R 755 ."
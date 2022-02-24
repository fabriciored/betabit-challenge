
# Desafio BetaBit

Desafio para a vaga de estagiário na BetaBit.
Foi proposta a criação de um app de lista telefônica onde
se pudesse fazer as operações de Criar, Ler, Atualizar e Deletar.

# Instalação
### Desenvolvimento
Separadamente nas pastar frontend e backend, rode o comando:
`npm install`, e depois `npm run dev`.

### Banco de dados
Com o MySQL instalado, no app Backend, crie um arquivo .env e especifique:

`DB_NAME=phonebook_dev`

`DB_USER=nome de usuario do banco de dados`

`DB_PASS= senha do banco de dados`

`DB_HOST= host do banco de dados`

Execute `npx sequelize db: create`

Ou crie manualmente um banco de dados SQL chamado phonebook_dev(opcional)

Depois execute `npx sequelize db:migrate` para criar as tabelas no MySQL.


### Build
Para fazer a build da aplicação rode o comando :
`npm run build`. Os arquivos serão criados na em uma pasta /dist.



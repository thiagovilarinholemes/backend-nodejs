# Backend-NodeJS

O modelo apresentado é um simples exemplo de Backend em NodeJS com Sequelize, onde este cria uma tabela USER com os 
campos: ID, NAME, EMAIL e PASSWORD.

Roda na porta 3001 em localhost

### URL's

GET: localhost:3001/users

GET ID: localhost:3001/users/:id?

POST: localhost:3001/users/:name?/:email?/:password?

PUT: localhost:3001/users/:id? - altera somente name.

DELETE: localhost:3001/users/:id?

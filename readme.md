# CRM

This is a microservice. This service only responsible for only "Manage contact".

## Todo

- (Done) Setup
- (Done) Term module
- Location + Address module
- Contact module
- Lead module
- Ledger module

## dependencies

- prisma
- @prisma/client
- express
- express-jwt
- jsonwebtoken
- swagger-ui-express

## Dev dependencies

- @types/express
- @types/node
- jest
- @types/jest
- @types/jsonwebtoken
- eslint
- ts-node
- typescript
- nodemon
- ts-node

## Command

Installation

> npm install --save prisma @prisma/client express

For doc:

> npm install --save swagger-ui-express

For JWT:

> npm install --save-dev @types/express @types/node jest @types/jest eslint ts-node typescript

Create migration

> npx prisma migrate dev --name <migration_file_name>
>
> npx prisma db push

Database seed

> npx ts-node <prisma/seeders/create>

Prisma format

> npx prisma format

Thank you.

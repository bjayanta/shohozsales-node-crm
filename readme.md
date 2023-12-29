# CRM

This is a microservice. This service only responsible for only "Manage contact".

## Todo

- Setup
- Term module
- Location + Address module
- Contact module
- Lead module
- Ledger module

## Command

Installation

> npm install --save prisma express
>
> npm install --save-dev @types/node ts-node typescript @types/express

Create migration

> npx prisma migrate dev --name <migration_file_name>
>
> npx prisma db push

Database seed

> npx ts-node <prisma/seeders/create>

Thank you.

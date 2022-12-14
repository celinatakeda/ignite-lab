# NodeJS
Trabalhando com NestJS para criar um sistema de microserviços de notificações.

NestJs é um framework opinado

## Instalar o cli do nest
```
npm i -g @nestjs/cli

$ nest new notifications-service
```

## Rodar
npm run start:dev

## Instalando prisma
npm i prisma -D

## Instalando prisma cli
npm i @prisma/client

## Rodar o prisma
```
  npx prisma init --datasource-provider SQLite
```
## Criando o banco de dados
```
  npx prisma migrate dev

  name: create notifications
```

## Visualizar o banco de dados
```
$ npx prisma studio
```
## Integrando o prisma dentro do nestjs

## Instalando class validator e transformer
```
  npm i class-validator class-transformer
```

## Rodar o teste
```
  npm run test
```

## Links 
https://nestjs.com/
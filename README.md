# strides-api-sample-code

A small api server using Node.js, Postgres.

## Dev Environment

### Env

Copy `.env.template` to `.env` and update env variables.

### Postgres

Install `postgres` server

```
brew install postgres
```

For Windows, download and install postgres from here: 

https://www.postgresql.org/download/windows/



### Import database dump into `postgres`

```
/src/db_dump.sql
```

### Project Install

```
npm install
```

### Run server

```
npm start
```

### Run dev server

```
npm run dev
```

### Build

```
npm run build
```

## API examples

### Signup an account / create a new user with name and password

```
POST^ .../signup
```

### Get all users

```
GET^ .../users
```

Should include an existing & valid `password hash` to the `Authorization` header.

### Get a user

```
GET^ .../users/:id
```

Should include an existing & valid `password hash` to the `Authorization` header.

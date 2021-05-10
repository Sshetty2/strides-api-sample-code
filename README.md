# strides-api-sample-code

A small api server using Node.js, Postgres.

## Dev Environment

Copy `.env.template` to `.env` and update env variables.

### Install

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

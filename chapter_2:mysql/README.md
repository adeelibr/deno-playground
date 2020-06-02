# Description

Tutorial for this codebase can be found at freecodecamp https://www.freecodecamp.org/news/create-a-todo-api-in-deno-written-by-a-guy-coming-from-node/

This tutorial focused on using oak to create a todo application.

List of thing achieved;

- Create a server using OAK
- Create routes and there controller
- Make an interface
- Stub some data
- Add logger middleware
- Add a not found middleware

## Run

```
deno run --allow-net server.ts
```

## Routes

```
GET      /todos
GET      /todos/:id
POST     /todos
PUT      /todos/:id
DELETE   /todos/:id
```

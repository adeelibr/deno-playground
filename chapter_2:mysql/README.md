# Description

Tutorial for this codebase can be found at freecodecamp ????

This tutorial builds on top of chapter 1

List of thing achieved;

- Create a DB connection
- Write a script that initialized DB & creates a table
- Write CRUD operations for DB & them in rest API's

## Steps [Execution order]

### Run

```bash
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

## Database Tricks

Once you have `mysql community server` & `mysql workbench` installed.

- Start MySql server
- Open workbench
- Run the following command

```sql
select current_user();
set password = "";
```

> This is because current mySql-deno pacakge doesn't work with latest mySql
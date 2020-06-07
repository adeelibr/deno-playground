# Description

Tutorial for this codebase can be found at https://www.freecodecamp.org/news/p/de7a850a-6d40-48a0-b6d7-8bf00ce66d10/

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

### Installing MySQL community server & MySQL workbench

Guideline written [here](../guidelines/setting-up-mysql-mac-os-catalina.md)

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

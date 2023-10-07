# Deno Playground

A collection of deno apps to build.

### Chapter 1

- It talks about setting up a basic todo application using deno/oak. Without using a database.
- Tutorial link: https://www.freecodecamp.org/news/create-a-todo-api-in-deno-written-by-a-guy-coming-from-node/

### Chapter 2

- Builds on chapter 1, where we add MySQL to our Todo application
- Tutorial link: https://www.freecodecamp.org/news/p/de7a850a-6d40-48a0-b6d7-8bf00ce66d10/

Please note in order to understand chapter 2, you need to go through chapter 1. 


# Troubleshoot

## Update for Deno Version 1.37.0

Since the time of writing this tutorial, Deno has seen updates, and some code changes are required to keep it up to date. One such change is related to handling request bodies.

In Deno version 1.0.2, you might have used the following code to handle request bodies:

```javascript
const body = await request.body();
```

However, with the current version of Deno (1.37.0), you should use the following code to access the request body:

```javascript
const body = await request.body().value;

```

This change ensures compatibility with the latest Deno version and ensures your code continues to work as expected.

Make sure to review your entire codebase for any other breaking changes or updates needed to stay in sync with the latest Deno version. Keep your code and tutorials up to date to provide the best experience for your users

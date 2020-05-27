import { Application } from 'https://deno.land/x/oak/mod.ts';

import todoRouter from './routes/todo.ts';

const app = new Application();
const port = 8080;

app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

console.log(`listening on port http://localhost:${port}`);
await app.listen({ port });
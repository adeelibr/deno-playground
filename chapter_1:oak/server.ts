import { Application } from "https://deno.land/x/oak/mod.ts";

import todoRouter from "./routes/todo.ts";

const app = new Application();
const port: number = 8080;

app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  console.log(
    `Listening on: ${protocol}${hostname ?? 'localhost'}:${port}`,
  );
});

await app.listen({ port });

import {
  green,
  cyan,
  white,
  bgRed,
} from "https://deno.land/std@0.53.0/fmt/colors.ts";

const X_RESPONSE_TIME: string = "X-Response-Time";

export default {
  logger: async (
    { response, request }: { response: any, request: any },
    next: Function,
  ) => {
    await next();
    const responseTime = response.headers.get(X_RESPONSE_TIME);
    console.log(`${green(request.method)} ${cyan(request.url.pathname)}`);
    console.log(`${bgRed(white(String(responseTime)))}`);
  },
  responseTime: async (
    { response }: { response: any },
    next: Function,
  ) => {
    const start = Date.now();
    await next();
    const ms: number = Date.now() - start;
    response.headers.set(X_RESPONSE_TIME, `${ms}ms`)
  },
};

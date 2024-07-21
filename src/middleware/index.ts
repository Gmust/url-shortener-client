import type { MiddlewareHandler } from 'astro';
import { defineMiddleware } from 'astro/middleware';

const middleware: MiddlewareHandler = (context, next) => {
  console.log("HELLO WORLD!");
  return next();
};

export const onRequest = middleware;

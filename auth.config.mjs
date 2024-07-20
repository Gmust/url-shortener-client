import { defineConfig } from 'auth-astro';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from './src/utils/mongodb.js';

export default defineConfig({
  secret: import.meta.env.AUTH_SECRET,
  adapter: MongoDBAdapter(
    clientPromise,
    {
      databaseName: import.meta.env.DB_NAME
    },
  ),
});


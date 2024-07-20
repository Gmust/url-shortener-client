import { MongoClient, MongoClientOptions } from 'mongodb';
import { MongoDBAdapterOptions } from '@auth/mongodb-adapter';
// @ts-ignore
if (!import.meta.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// @ts-ignore
const uri = import.meta.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

// @ts-ignore
if (import.meta.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  //@ts-ignore
  if (!global._mongoClientPromise) {
// @ts-ignore
    client = new MongoClient(uri, options);
    //@ts-ignore
    global._mongoClientPromise = client.connect();
  }
  //@ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
// @ts-ignore
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

import { MongoClient, ServerApiVersion } from "mongodb";

  if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
const uri = process.env.MONGO_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so the MongoClient is not constantly re-created during hot reloading
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
// Export the MongoClient and clientPromise for use in other parts of the application
export { client, clientPromise };
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongodbUri = 'mongodb+srv://mongodb:mongodb@cluster0.2ntzfio.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(mongodbUri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
exports.default = client;

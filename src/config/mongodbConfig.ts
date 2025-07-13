import { MongoClient, ServerApiVersion } from 'mongodb';

const mongodbUri =
    'mongodb+srv://mongodb:mongodb@cluster0.2ntzfio.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongodbUri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export default client;

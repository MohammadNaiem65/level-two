import app from './app';
import client from './config/mongodbConfig';

const bootstrap = async () => {
    await client.connect();
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
        console.log('Server is running on port: 3000');
    });
};

bootstrap();

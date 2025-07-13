import express, { Application, Request, Response } from 'express';
import { todoRouter } from './routes/todo.routes';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/todos', todoRouter);

export default app;

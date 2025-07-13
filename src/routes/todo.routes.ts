import express, { Request, Response } from 'express';

export const todoRouter = express.Router();

todoRouter.get('/', (req: Request, res: Response) => {
    res.send('Todos!');
});

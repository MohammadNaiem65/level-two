import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import client from '../config/mongodbConfig';

export const todoRouter = express.Router();

todoRouter.get('/', async (req: Request, res: Response) => {
    const todoCollection = client.db('todos').collection('todos');

    const cursor = todoCollection.find({});
    const todos = await cursor.toArray();

    res.json(todos);
});

todoRouter.post('/', async (req: Request, res: Response) => {
    const data = req.body;

    const todoCollection = client.db('todos').collection('todos');

    const response = await todoCollection.insertOne(data);

    res.json(response);
});

todoRouter.get('/:todoId', async (req: Request, res: Response) => {
    const { todoId } = req.params;

    const todoCollection = client.db('todos').collection('todos');

    const todo = await todoCollection.findOne({ _id: new ObjectId(todoId) });

    res.json(todo);
});

todoRouter.put('/:todoId', async (req: Request, res: Response) => {
    const { todoId } = req.params;
    const data = req.body;

    const todoCollection = client.db('todos').collection('todos');

    const response = await todoCollection.updateOne(
        { _id: new ObjectId(todoId) },
        {
            $set: { ...data },
        },
        {
            upsert: true,
        }
    );

    res.json(response);
});

todoRouter.delete('/:todoId', async (req: Request, res: Response) => {
    const { todoId } = req.params;

    const todoCollection = client.db('todos').collection('todos');

    const response = await todoCollection.deleteOne({
        _id: new ObjectId(todoId),
    });

    res.json(response);
});

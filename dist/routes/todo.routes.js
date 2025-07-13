"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const mongodbConfig_1 = __importDefault(require("../config/mongodbConfig"));
exports.todoRouter = express_1.default.Router();
exports.todoRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todoCollection = mongodbConfig_1.default.db('todos').collection('todos');
    const cursor = todoCollection.find({});
    const todos = yield cursor.toArray();
    res.json(todos);
}));
exports.todoRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const todoCollection = mongodbConfig_1.default.db('todos').collection('todos');
    const response = yield todoCollection.insertOne(data);
    res.json(response);
}));
exports.todoRouter.get('/:todoId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { todoId } = req.params;
    const todoCollection = mongodbConfig_1.default.db('todos').collection('todos');
    const todo = yield todoCollection.findOne({ _id: new mongodb_1.ObjectId(todoId) });
    res.json(todo);
}));
exports.todoRouter.put('/:todoId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { todoId } = req.params;
    const data = req.body;
    const todoCollection = mongodbConfig_1.default.db('todos').collection('todos');
    const response = yield todoCollection.updateOne({ _id: new mongodb_1.ObjectId(todoId) }, {
        $set: Object.assign({}, data),
    }, {
        upsert: true,
    });
    res.json(response);
}));
exports.todoRouter.delete('/:todoId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { todoId } = req.params;
    const todoCollection = mongodbConfig_1.default.db('todos').collection('todos');
    const response = yield todoCollection.deleteOne({
        _id: new mongodb_1.ObjectId(todoId),
    });
    res.json(response);
}));

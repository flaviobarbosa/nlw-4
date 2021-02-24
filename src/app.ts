import 'reflect-metadata';
import express from 'express';
import { router } from './routers';

// import './database';
import createConnection from './database';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };

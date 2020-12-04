import { itemsRouter } from './src/items.router';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const port = 4201;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', itemsRouter);

app.listen(port, () => {
    console.log(`Helmet tracking api running on http://localhost:${port}`);
});

import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import debugCreator from 'debug';
import apiRouter from './api/api-router.js';

const debug = debugCreator('server');
const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.json(
    'HOLA! si quieres ver lo que he aprendido en el bootcamp, dirígete a https://two02301-w6ch2-enrique-jimenez.onrender.com/api/v1/things',
  );
});

app.use(express.json());
app.use('/api/v1', apiRouter);

app.listen(port, () => {
  debug(`Server started in port ${port}`);
});

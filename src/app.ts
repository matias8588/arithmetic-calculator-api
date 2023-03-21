import cors from 'cors';
import express from 'express';

import './utils/auth';
import routerApi from './routes';
import {
  boomErrorHandler,
  errorHandler,
  logErrors,
  ormErrorHandler,
} from './middleware/error.handlers';

const app = express();

app.use(express.json());

app.use(cors());

require('./utils/auth');

routerApi(app);

app.get('/ping', (_req, res) => {
  return res.send('pong 🏓');
});

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

export default app;

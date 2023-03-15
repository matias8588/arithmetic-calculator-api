import express from 'express';
import cors from 'cors';

import routerApi from './routes';
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} from './middleware/error.handlers';

const app = express();

app.use(express.json());

app.use(cors());

import './utils/auth';
import { config } from './config/config';

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server en port: ${config.port}`);
});

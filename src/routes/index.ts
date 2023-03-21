import express, { Express } from 'express';

import usersRouter from './users.routes';
import authRouter from './auth.routes';
import operationsRouter from './operations.routes';
import recordRouter from './record.routes';

function routerApi(app: Express) {
  const router = express.Router();

  app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
  });

  app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
  });
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/operations', operationsRouter);
  router.use('/record', recordRouter);
}

export default routerApi;

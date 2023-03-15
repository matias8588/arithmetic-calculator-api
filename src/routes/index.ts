import express from 'express';
import { Express } from 'express-serve-static-core';

import usersRouter from './users.routes';
import authRouter from './auth.routes';

function routerApi(app: Express) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

export default routerApi;

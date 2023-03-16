import express, { NextFunction, Request, Response } from 'express';

import UserService from '../services/user.services';
import validatorHandler from '../middleware/validator.handler';
import { createUserSchema } from '../schemas/user.schema';
import { auth } from '../middleware/auth';

const router = express.Router();
const service = new UserService();

router.get(
  '/',
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await service.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const user = await service.create(body);
      res.status(201).json(user);
    } catch (error) {
      res.json({ error });
    }
  },
);

export default router;

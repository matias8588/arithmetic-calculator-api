import express, { NextFunction, Request, Response } from 'express';

import validatorHandler from '../middleware/validator.handler';
import { createOperationSchema } from '../schemas/operation.schema';
import { auth } from '../middleware/auth';
import OperationsService from '../services/operations.service';
import { arithmeticFn } from '../utils/arithmetic/index';

const router = express.Router();
const service = new OperationsService();

router.get(
  '/',
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const operations = await service.find();
      res.json(operations);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  auth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { type, numberA, numberB } = req.body;

      const result = await arithmeticFn({ type, numberA, numberB });
      const operation = {
        type,
        cost: 400,
        userId: req?.user,
        operationId: '8991d94f-5b52-45eb-872b-eb2b83e8219d',
      };
      const newOperation = await service.create(operation);
      res.status(201).json(newOperation);
    } catch (error) {
      res.json({ error });
    }
  },
);

export default router;

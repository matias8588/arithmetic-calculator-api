import express, { NextFunction, Request, Response } from 'express';

import { auth } from '../middleware/auth';
import OperationsService from '../services/operations.service';
import { arithmeticFn } from '../utils/arithmetic/index';
import RecordService from '../services/record.service';
import validatorHandler from '../middleware/validator.handler';
import { queryOperationSchema } from '../schemas/operation.schema';

const router = express.Router();
const service = new OperationsService();
const recordService = new RecordService();

export interface IRecord {
  operationId: string;
  userId: string;
  amount: number;
  userBalance: number;
  operationResponse: number;
  date: Date;
}

router.get(
  '/',
  auth,
  validatorHandler(queryOperationSchema, 'query'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const operations = await service.find(req?.query);
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
      const records = await recordService.findByUser(req?.user as string);
      const recordId = records?.dataValues.id;

      const operation = {
        type,
        cost: 400,
        userId: req?.user,
        recordId,
        operationResponse: result,
      };

      const newOperation: any = await service.create(operation);

      res.status(201).json(newOperation);
    } catch (error) {
      next(error);
    }
  },
);

export default router;

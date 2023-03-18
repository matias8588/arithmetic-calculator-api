import Joi from 'joi';

const id = Joi.string().uuid();
const type = Joi.string();
const numberA = Joi.number();
const numberB = Joi.number();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const queryOperationSchema = Joi.object({
  limit,
  offset,
  type,
});

const createOperationSchema = Joi.object({
  type: type.required(),
  numberA: numberA.required(),
  numberB: numberB.required(),
});

export { createOperationSchema, queryOperationSchema };

import Joi from 'joi';

const id = Joi.string().uuid();
const type = Joi.string();
const cost = Joi.number();
const numberA = Joi.number();
const numberB = Joi.number();

const createOperationSchema = Joi.object({
  type: type.required(),
  numberA: numberA.required(),
  numberB: numberB.required(),
});

export { createOperationSchema };

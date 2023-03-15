import Joi from "joi";

const id = Joi.string().uuid();
const email = Joi.string().email();
const password = Joi.string().min(6);
const isActive = Joi.boolean();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  isActive,
});

const login = Joi.object({
  email: email.required(),
  password: password.required(),
  isActive,
});

export { createUserSchema, login };

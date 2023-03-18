import boom from '@hapi/boom';

export default function division(a: number, b: number) {
  if (b === 0) {
    throw boom.badRequest('A number cannot be divided by zero');
  }
  return a / b;
}

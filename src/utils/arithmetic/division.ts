import boom from '@hapi/boom';

export default function division(a: number, b: number) {
  if (!b || !a) {
    throw boom.badRequest(
      'You must fill in all the fields to perform this operation.',
    );
  }
  if (b === 0) {
    throw boom.badRequest('A number cannot be divided by zero');
  }
  return a / b;
}

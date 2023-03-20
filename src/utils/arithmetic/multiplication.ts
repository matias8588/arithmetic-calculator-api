import boom from '@hapi/boom';

export default function multiplication(a: number, b: number) {
  if (!b || !a) {
    throw boom.badRequest(
      'You must fill in all the fields to perform this operation.',
    );
  }
  return a * b;
}

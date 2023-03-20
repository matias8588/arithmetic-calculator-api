import boom from '@hapi/boom';
export default function addition(a: number | null, b: number | null) {
  if (!b || !a) {
    throw boom.badRequest(
      'You must fill in all the fields to perform this operation.',
    );
  }
  return a! + b!;
}

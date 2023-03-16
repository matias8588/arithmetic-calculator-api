import RandomOrg from 'random-org';

export default async function randomString() {
  const random = new RandomOrg({
    apiKey: 'fa9de9c9-3d62-4fb1-b41c-4b9a2b3ab6e8',
  });
  const randomString = await random
    .generateStrings({ n: 1, length: 10, characters: 'string' })
    .then(function (result) {
      return result.random.data;
    });

  return randomString;
}

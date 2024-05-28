export function chooseRandomElement<T>(collection: T[]): T {
  return collection[Math.floor(Math.random() * collection.length)];
}

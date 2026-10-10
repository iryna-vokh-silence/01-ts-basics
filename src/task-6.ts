function getFirstElement<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["a", "b", "c"]);
const firstBoolean = getFirstElement<boolean>([true, false]);

console.log(firstNumber, firstString, firstBoolean);

// Control check (causes a TypeScript error, so it stays commented out):
// getFirstElement<number>([1, 2, "3"]);

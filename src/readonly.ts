
// cannot modify the id
type ReadOnlyPerson = {
  readonly id: number;
  name: string;
  age: number;
};


// array cannot be manipulted, but methods that return a new array - such as map - can still be used
type NumberArray = readonly number[];

const nums: NumberArray = [1, 2, 3];

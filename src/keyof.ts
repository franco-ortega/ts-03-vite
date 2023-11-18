import { Person } from './types'

function getValue(key: keyof Person, person: Person) {
  return person[key];
}

const age = getValue("age", { name: "Franco", age: 45 })

console.log(age);

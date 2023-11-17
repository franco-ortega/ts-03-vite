import { Person } from './types'

const person: Person = { name: "Franco", age: 45 }

// Intersection with Types - "&" character
type PersonWithId = Person & { id: string  }

const personWithId: PersonWithId = { name: "Franco", age: 45, id: '123' }

console.log(person)
console.log(personWithId);

type Todo = {
  todo: string;
  completed: boolean;
}

type PersonWithIdAndTodo = Person & Todo & { id: string}

// contains all properties of Person and Todo and id
const personWithIdAndTodo: PersonWithIdAndTodo = {
  name: "Franco",
  age: 45,
  id: '123',
  todo: 'laundry',
  completed: false
}

console.log(personWithIdAndTodo)

// Intersection with Interfaces - "extends" keyword
interface PersonWithIdInterface extends Person { id: string  }

const person2: Person = { name: "Franco", age: 45 }

const person2WithId: PersonWithIdInterface = { name: "Franco", age: 45, id: '456' }

console.log(person2)
console.log(person2WithId);
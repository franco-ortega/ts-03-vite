// Types vs Interfaces
// Types can be used with any type
// Interfaces can be only used with objects

export type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
}


export type Count = number

export interface Animal {
  species: string
}


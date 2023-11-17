
console.log('Hi');

// Types vs Interfaces
// Types can be used with any type
// Interfaces can be only used with objects

type Person = {
  name: string;
  age: number
}

type Count = number

interface Animal {
  species: string
}

// Union
// Unions can be used with Types but not Interfaces
let id: string | number = 7;

id = "7";
id = 7;


// Todo without Union
// There is a typo with the status as "Completed"
type Todo = {
  name: string;
  status: string
}

const todo = { name: "Laundry", status: "Cmpleted" }

// Todo with Union
type TodoWithUnion = {
  name: string;
  status: "Complete" | "Incomplete" | "Draft"
}

const todoWithUnion: TodoWithUnion = { name: "Laundry", status: "Complete" }

// Union of Types
// Unions can be used with Types but not Interfaces
type TodoPerson = Todo | Person;




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

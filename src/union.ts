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

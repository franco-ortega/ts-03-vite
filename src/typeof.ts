// typeof gets the type of whatever it is given

// in this instance, the use of typeof allows the type for the people array to match whatever is contained in person, so if the properties of person change, then the type of the people array will change in the same way
const person = { name: "Franco", age: 45 };
const people: (typeof person)[] = []


people.push(person);
people.push({ name: "Anna", age: 42 });
people.push(2);



function sayHi(name: string) {
  console.log(name)
}

type FuncType = typeof sayHi;
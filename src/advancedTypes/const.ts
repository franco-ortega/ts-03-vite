const num1 = 1 as const;

// const adds the readonly type
// cannot modify array
const numList = ["1", "2", "3"] as const;

const numList1 = numList[0];

// EXAMPLE #1
// Problem: JavaScript cannot access property (skillLevels) from TypeScript type (Person)

type Person = {
  skillLevel: "Beg" | "Int" | "Expert"
}

skillLevels.forEach(skillLevel) => {
  console.log(skillLevel)
}


const testCat = {
  titles: ["Meow", "Wow"]
}

testCat.titles.forEach(title => {
  console.log(title);
})


// EXAMPLE #2
// Solution: Create an enum with the 'as const' type and have the 'type' depend on it with the 'typeof' keyword, and now the forEach is looping through a JS array instead of a TS type
const SKILL_LEVELS = ["Beg", "Int", "Expert"] as const;

type PersonEnumHelper = {
  // skillLevel: "Beg" | "Int" | "Expert"
  skillLevel: (typeof SKILL_LEVELS)[number]
}

SKILL_LEVELS.forEach(skillLevel => {
  console.log(skillLevel)
})

// EXAMPLE #3
// Properties cannot be changed or added with 'as const' cos it makes it 'readonly'
const personConst = {
  name: "Franco",
  age: 45,
  address: {
    street: "Main St"
  }
} as const

personConst.age = 2

const personAge = personConst.age;
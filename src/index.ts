type SkilledPerson = {
  name: string;
  skillLevel: "Beginner" | "Intermediate" | "Expert"
}

const skilledFranco: SkilledPerson = {
  name: "Franco",
  skillLevel: "Expert"
}

function printSkillLevel(skillLevel: SkilledPerson["skillLevel"]) {
  console.log(skillLevel);
}

// Group people by skill level - the string must be one of the skill levels
type PeopleGroupedBySkillLevel = {
  [index in SkilledPerson["skillLevel"]]: SkilledPerson[]
}

const a: PeopleGroupedBySkillLevel = {
  "Beginner": [{ name: "Franco", skillLevel: "Expert"}]
}

// Group people by name - any string is valid
type PeopleGroupedByName = {
  [index: SkilledPerson["name"]]: SkilledPerson[]
}

const b: PeopleGroupedByName = {
  "Franco": [{ name: "Franco", skillLevel: "Expert"}],
  "Blah": [{ name: "Blah", skillLevel: "Expert"}, { name: "Blah2", skillLevel: "Intermediate"}]
}

// index with typeof
const list = ["sack", "green", false];

type ListType = (typeof list);

type ListItemType = (typeof list)[number];


const c = {
  name: "Franco",
  age: 45
}

type C = (typeof c)[keyof typeof c]

type nameOfPerson = (typeof c)["name"];

const d = {
  name: "Anna",
  age: 42,
  isProgrammer: true
}

type D = (typeof d)[keyof typeof d]
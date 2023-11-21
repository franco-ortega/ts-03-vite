const cat = {
  name: "Meowzer",
  age: 5,
  address: {
    street: "Catnip St"
  }
}

Object.entries(cat).forEach(([key, value]) => {
  console.log(key, value)
});

type CatTuple = [string, boolean]
const cat1: CatTuple = ["Boop", true]
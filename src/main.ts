
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

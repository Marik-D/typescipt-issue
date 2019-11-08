import data from "./data.json";

interface Foo {
  type: string;
}

const a: Foo[] = data.interface;
const b: Foo[] = data.interface;

console.log(a);
console.log(b);

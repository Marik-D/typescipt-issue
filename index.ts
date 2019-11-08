import data from "./data.json";

interface Foo {
  str: string;
}

const a: Foo[] = data.foo;
const b: Foo[] = data.foo;

interface Bar {
  bool: string;
}

const c: Bar[] = data.foo;
const d: Bar[] = data.foo;

console.log(a);
console.log(b);
console.log(c);

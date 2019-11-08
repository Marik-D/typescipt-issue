import data from "./data.json";

interface Foo {
  type: string;
}

class Bar {
  constructor(param: Array<Foo>) {}
}

const a = new Bar(data.interface);
const b = new Bar(data.interface);

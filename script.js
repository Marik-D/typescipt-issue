const fs = require("fs");
const data = require("./data.json");

const newData = {
  interface: data.interface.map(({ payable, name, stateMutability, ...x }) => x)
};

fs.writeFileSync("./data1.json", JSON.stringify(newData, null, 4));

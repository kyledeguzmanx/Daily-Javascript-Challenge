let map = new Map();

map.set("Kyle", "Taken");
map.set("Finn", "Single");
map.set("Nashe", "Taken");
map.set("Gunther", "Single");

map.delete("Kyle");

const boolean = map.has("Kyle"); //true

let mapTwo = new Map([
  ["Kelly", "Taken"],
  ["Ryan", "Taken"],
  ["Erika", "Taken"],
  ["Inayah", "Single"]
]);

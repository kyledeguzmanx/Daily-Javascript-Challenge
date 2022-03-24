let set = new Set();

set.add("A");
set.add("B");
set.add("C");
set.add("D");
set.add("D");
set.add("D");

set.delete("A");
console.log(set.has("C"));//true
console.log(set.values());
let setTwo = new Set(["A", "B", "C", "D", "E", "E", "E", "F"]);

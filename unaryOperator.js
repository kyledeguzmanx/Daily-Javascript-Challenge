let str = "10";
let num = +str;

console.log(typeof str, typeof num);

let word = "Hello";
let n = +word;

console.log(typeof word, typeof n, n);

/*
string, number
string, number, NaN

The unary + operator is used to convert a variable to a number.
If the variable cannot be converted, it is converted to NaN (which is a special case of being a number, so the type is still a number).


*/

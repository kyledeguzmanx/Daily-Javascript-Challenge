const array = [1,1,1,1,1,1,1,1,1,1,1];

console.log(array.reduce(function(a,b){
  return a*b; //a is running total, b is index 1
}));

console.log(array.reduce(function(a,b){
  return a+b;
}));

console.log(array.reduce(function(a,b){
  return a*b;
},5));
console.log(array.reduce(function(a,b){
  return a+b;
},10));
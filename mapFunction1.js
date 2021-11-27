const array =  [1,2,3,4,5,6,7,8,9];

console.log(array.map(function(x){ 
    return x*2;  
}));


console.log(array.map(x=>{
  return x*3
}));

function timesFour(x){
  return x*4;
}

console.log(array.map(timesFour));
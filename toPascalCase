function toUnderscore(string) {
  let array = string.split("");
  let returnArray = [];
  
  if (array[0] == array[0].toUpperCase())
    returnArray.push(array[0].toLowerCase());
  
  for(let i = 1; i < array.length; i++){
     if (array[i] == array[i].toUpperCase()){
         returnArray.push("_",array[i].toLowerCase());
     }
     else
        returnArray.push(array[i]);
  }
  return returnArray.join("");
}

console.log(toUnderscore("IAlmostDroppedMyCroissant"));


//optimized version

function toUnderscore(string) {
  let array = string.split("");
  let returnArray = [];
  
  if (array[0] == array[0].toUpperCase())
    returnArray.push(array[0].toLowerCase());
  
  for(let i = 1; i < array.length; i++){
     if (array[i] == array[i].toUpperCase() && !Number.isInteger(parseInt(array[i]))){
         returnArray.push("_",array[i].toLowerCase());
     }
     else
        returnArray.push(array[i]);
  }
  return returnArray.join("");
}
console.log(toUnderscore("IAlmostDroppedMyCroissant"));
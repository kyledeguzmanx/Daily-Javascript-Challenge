/*
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
*/

var solution = function(firstArray, secondArray) {
    if(firstArray.length == secondArray.length){
      let length = firstArray.length;
      let sum = 0;
      let array = [];
      for(let i=0; i < length; i++){
        sum += Math.pow(Math.abs(firstArray[i]-secondArray[i]),2);
      }
      return sum/length;
    }
    else
      return 0;
  }
  
  console.log(solution([0,0,0],[3,3,3]));
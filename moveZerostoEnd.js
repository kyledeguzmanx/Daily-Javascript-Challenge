/*
 Takes an array of numbers, floats, booleans, strings
 Moves all the 0s to the end of the array.
 
Note "arr[i]!== 0"
    -> arr[i] != 0 
        -> one of the elements of array arr is the boolean false
        -> false and 0 have the same value
    -> arr[i] !==0
        -> checks value AND type
        -> false is boolean, 0 is number


*/

var moveZeros = function (arr) {
    let array = [];
    let numZeroes = 0;
    
    for(let i=0; i < arr.length; i++){
      if(arr[i]!==0)
        array.push(arr[i]);
      else
        numZeroes++;
    }
    while(numZeroes>0){
      array.push(0);
      numZeroes--;
    }
    return array;
  }
  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
  console.log(false == 0);
  console.log(false ===0);
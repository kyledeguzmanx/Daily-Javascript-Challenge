function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.
    for(let i=0; i < array.length; i++){
        console.log(array);
        if(array[i] == 0){
            //swap with nonZero
            let j = findNextInteger(array, i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }//end-if
    }//end-for
    
    
    return array;
  }
  function findNextInteger(array, index){
      if(index == array.length-1){
          return index;
      }
      let i = index+1;
      while(i<array.length){
          if(array[i] != 0)
              break;
          i++;
      }
      return i == array.length ? index : i;
  }
  console.log (findNextInteger([0,0,0,0,1,2,3],2));
  console.log(removeZeros([1,2,3,4,0,5,0,4,2]));
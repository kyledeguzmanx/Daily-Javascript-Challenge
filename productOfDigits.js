/*
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                 
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
                  
 persistence(4) === 0 // because 4 is already a one-digit number

 Note: I have a feeling this can use closures. I originally wanted a recursive function, but I need closures to accomplish that.
 Or I could create a global variable and store the counter there. 

*/

function persistence(num) {
    let root = num.toString();
    let product=1;
    counter = 0;
    
    while(root.length > 1){
      console.log(root);
      console.log(root.length);
      for(let i=0; i< root.length; i++){
        product *= parseInt(root[i]);
      }
      root = product.toString();
      product = 1;
      counter++;
    }
    return counter;
}

console.log(persistence(39));
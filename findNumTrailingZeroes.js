function zeros (n) {
    let product = factorial(n);
    console.log(product);
    let numZeroes = 0;
    let finished = false;
    
    do{
      if(Number.isInteger(product/10)){
        numZeroes++;
        product /= 10;
      }
      else{
        finished = true;
      }
    }while(!finished);
    return numZeroes;
  }
  
  function factorial(n){
    if (n === 0){
      return 1;
    }
    else{
      return n * factorial(n-1);
    }
  }
  
  console.log(zeros(5));
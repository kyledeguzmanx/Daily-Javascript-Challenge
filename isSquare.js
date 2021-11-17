/*FIRST SUCCESFUL ATTEMPT*/
var isSquare = function(n){
    if (n<0) return false;
    else if( n===0) return true;
    else{
      if(Math.sqrt(n)%1 === 0) return true;
      else return false;
    }
  }
  
  console.log(isSquare(4));


  /* REFACTOR*/
  var isSquare = function(n){
    return Math.sqrt(n)%1 === 0;
  }
  
  /*REFACTOR */
  var isSquare = function(n){
   return Math.sqrt(n)%1 === 0 ? true : false;
  }
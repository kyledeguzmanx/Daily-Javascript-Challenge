function factorial(n){
  n = parseInt(n);
  if(!Number.isInteger(n) || n < 0){
    return null;
  }
  else if( n == 1){
    return "1";
  }
  else {
    return (n * parseInt(factorial(n-1))).toString();
  }
}

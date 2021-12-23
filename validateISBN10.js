function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
  let sum =0;
  let array = isbn.split("");
  if (array.length != 10) return false;
  for(let i=0; i < array.length; i++){
      if(i != 9){
          if(array[i] == "X") return false;
      }
      else{
         array[i] = array[i] == "X" ? 10 : array[i];
      }

      sum += array[i]*(i+1);
  }
  
  return sum % 11 == 0;
}

console.log(validISBN10("1112223339"));
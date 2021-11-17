/*
 Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
 The first word within the output should be capitalized only if the original word was capitalized 
 (known as Upper Camel Case, also often referred to as Pascal case).



 */

 function toCamelCase(str){
    let arr = [...str];
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i])
      if(arr[i]=="-" || arr[i] == "_"){
        arr.splice(i,2,arr[i+1].toUpperCase());
      }
    }
    return arr.join("");
    
  }
  console.log(toCamelCase("the-area-is-cold"));
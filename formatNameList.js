/*

TAKES AN ARRAY OF OBJECTS THAT CONTAIN NAMES. FORMAT IT:

ONE NAME = KYLE
TWO NAMES = KYLE & KYLE
THREE NAMES OR MORE = KYLE, KYLE AND KYLE

*/
function list(names){
    let returnString = "";
    if (names.length == 1){
        return names[0].name;
    }
    else if(names.length == 2){
        return names[0].name + " & " + names[1].name;
    }
    else{
        for(let i = 0; i < names.length; i++){
        if(i!= names.length-1 && i != names.length-2){
            returnString+= names[i].name + ", ";
        }
        else if(i == names.length-2){
            returnString += names[i].name + " ";
        }
        else{
            returnString+= "& " + names[i].name;
        }
    }
    }
    return returnString;
  }
  
  console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
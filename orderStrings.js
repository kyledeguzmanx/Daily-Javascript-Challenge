/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/
function order(words){
    let array = words.split(" ");
    let final = new Array (array.size);
    console.log(array);
    
    for(let i=0; i<array.length; i++){
        for(let j=0; j < array[i].length; j++){
            //console.log(array[i][j]);
            if(Number.isInteger(parseInt(array[i][j]))){
                final[parseInt(array[i][j]-1)] = array[i];
                //console.log("completed");
            }
        }
    }
    
    //console.log(array[1][3]);
    return final.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
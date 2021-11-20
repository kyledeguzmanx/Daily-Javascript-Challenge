/*SORT STRINGS ASCENDING ORDER */

var names = ['Adam', 'Carrie', 'Hijazi', 'Gale', 'Fendi'];

function stringAscending(inputArr){
    let array = inputArr;
    return array.sort();  //Adam, Carrie, Fendi, Gale, Hijazi
}
console.log(stringAscending(names));



/*SORT STRING DESCENDING */
function stringDescending(inputArr){
    let array = inputArr;

    return array.sort(function(a,b){ 
        if (a > b) {
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });
    //Hijazi, Gale, Fendi, Carrie, Adam
}
console.log(stringDescending(names));

var numbers = [5,4,8,1,6,2];


/* SORT NUMBER ASCENDING* */
function numberAscending(inputArr){
    let array = inputArr;
    return array.sort(function(a, b) {
        return a - b;
      });
}

console.log(numberAscending(numbers));

function numberAscendingTwo(inputArr){
    let array = inputArr;
    return array.sort((a, b) => a - b);
}
console.log(numberAscendingTwo(numbers));
/*SORT NUMBER DESCENDING*/
function numberDescending(inputArr){
    let array = inputArr;
    return array.sort(function(a, b) {
        return b - a;
      });
}
console.log(numberDescending(numbers));

function numberDescendingTwo(inputArr){
    let array = inputArr;
    return array.sort((a, b) => b - a);
}
console.log(numberDescendingTwo(numbers));
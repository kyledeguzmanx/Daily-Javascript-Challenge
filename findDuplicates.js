function findDuplicates(arry) {
    let duplicateFound = false;
    return arry.some((element, index) => {
        return arry.indexOf(element) !== index
    }); 
}

console.log(findDuplicates([11,12,13,14,13,15]));

//indexOf finds the first index of an element
    //for example, if 14 occurs more than once, then all the 14 elements
    //will have an indexOf of the first 14 index. Ergo, it will not equal index
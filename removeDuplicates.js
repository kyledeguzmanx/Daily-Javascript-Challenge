function findDuplicates(arry) {
    let duplicateFound = false;
    return arry.some((element, index) => {
        return arry.indexOf(element) !== index
    }); 
}

console.log(findDuplicates([11,12,13,14,13,15]));

function removeDuplicates(arry){
    let newArry = [];
    if(findDuplicates(arry)){
        for(let j=0; j<arry.length; j++){
            if(arry.indexOf(arry[j]) == j)
                newArry.push(arry[j]);
        }
    }
    else 
        return [];
    return newArry;
}

console.log(removeDuplicates([1,2,3,4,5,6,8,8,7,8,9,10]));
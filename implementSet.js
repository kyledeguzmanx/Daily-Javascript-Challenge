/*
    Javascript implementation of Sets data structure
    
    Principles
    - an array with no duplicates
*/
function mySet(){
    var dataStructure = [];

    this.has = (element) => {
        return dataStructure.indexOf(element) !== -1;
    }
    
    
}
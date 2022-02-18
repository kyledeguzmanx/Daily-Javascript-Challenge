/*
    Javascript Implementation of a Stack

*/

var Stack = function(){
    this.counter = 0;
    this.dataStructure = {};

    this.push() = (item) => {
        this.dataStructure[this.counter] = item;
        this.counter++;
    }
    

}
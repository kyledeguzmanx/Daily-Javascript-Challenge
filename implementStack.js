/*
    Javascript Implementation of a Stack

*/

var Stack = function(){
    this.counter = 0;
    this.dataStructure = {};

    this.push = (item) => {
        this.dataStructure[this.counter] = item;
        this.counter++;
    };

    this.pop = () => {
        if(this.counter == 0){
            return undefined;
        }
        else{
            this.counter--;
            var result = this.dataStructure[this.counter];
            delete this.dataStructure[this.counter];
            return result;
        }
    }
}

//example

let bookStack = new Stack();

bookStack.push("Harry Potter");
bookStack.push("Harry Potter 2");
bookStack.push("Black Beauty");
bookStack.pop();
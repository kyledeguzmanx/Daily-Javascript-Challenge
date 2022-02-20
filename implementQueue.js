function Queue(){
    var dataStructurre = [];

    this.enqueue = (item) => {
        dataStructurre.push(item);
    }
    this.dequeue = () => {
        return dataStructurre.shift();
    }

    this.print = () => {
        console.log(dataStructurre);
    }
    this.front = () => {
        return dataStructurre[0];
    }
    this.isEmpty() = () =>{
            return dataStructurre.legth === 0 ? true : false;
        }
}

var myQueue = new Queue();
myQueue.enqueue("A");
myQueue.enqueue("B");
myQueue.enqueue("C");
myQueue.dequeue();
myQueue.dequeue();
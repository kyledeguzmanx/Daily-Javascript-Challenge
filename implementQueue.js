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
}
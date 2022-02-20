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
    
    this.add  = (element) => {
        if(!this.has(element)){
                dataStructure.push(element);
                return true;
        }
        else{
            return false;
        }
    }


    this.remove = (element){
        if(this.has(element)){
            var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        else{
            return false;
        } 
    }
}

var sampleSet = new sampleSet();
sampleSet.add("Janine");
sampleSet.add("Offred");
sampleSet.add("Aunt Lydia");
sampleSet.add("Ofglen");
sampleSet.add("Serena");
sampleSet.add("Janine");
sampleSet.add("June");
sampleSet.add("Offred");
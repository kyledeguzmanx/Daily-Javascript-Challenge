
const removeById = (personId, done) => {
  Person.findByIdAndRemove({_id: personId}, (error, data) => {
    if(error){
      console.error(error);
    }
    done(null, data)
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({name: nameToRemove}, (error,data) => {
    if(error){
      console.error(error)
    }
    done(null,data);
  });
};


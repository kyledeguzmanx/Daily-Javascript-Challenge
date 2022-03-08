
const removeById = (personId, done) => {
  Person.findByIdAndRemove({_id: personId}, (error, data) => {
    if(error){
      console.error(error);
    }
    done(null, data)
  })
};

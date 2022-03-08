const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods: foodToSearch}).sort({name: 1}).limit(2).select({age: 0}).exec((error, data)=>{
    if(error){
      console.error(error);
    }
    done(null, data)
  });
};

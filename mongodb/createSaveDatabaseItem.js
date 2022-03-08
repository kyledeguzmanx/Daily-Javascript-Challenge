require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySecret = process.env['PASSWORD']
mongoose.connect(mySecret);


const personSchema  = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});
let Person = mongoose.model("Person", personSchema); //creates model called person

/*
let personSchema = new Schema({
  name: {type: String}, //name: {type: String, required:true}
  age: Number,
  favoriteFoods:[{type: String}]
  //also Boolean
});*/

const createAndSavePerson = (done) => {
  let kyleDeGuzman = new Person({
    name: "Kyle DeGuzman",
    age: 21,
    favoriteFoods: ["Mangos", "Fried Tofu", "Kiwi Starfruit Juice"]
  })
  kyleDeGuzman.save((error, data)=>{
    if(error){
      return console.error(error);
    }
    done(null,data);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (error, data) => {
    if(error){
      return console.error(error);
    }
    done(null, data)
  });
};

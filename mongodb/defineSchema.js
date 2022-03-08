const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://kyle:kylee@cluster0.iejqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");


const personSchema  = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});
let Person = mongoose.model("Person", personSchema);

/*
let personSchema = new Schema({
  name: {type: String}, //name: {type: String, required:true}
  age: Number,
  favoriteFoods:[{type: String}]
  //also Boolean
});*/

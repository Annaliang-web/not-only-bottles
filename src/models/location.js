//Model is like a global 'object' so in the future the all other files can use it

let mongoose = require('mongoose') 
let Schema = mongoose.Schema; //Schema is one of building model library

let locationSchema = new Schema({
    image: String,
    name: String,
    address: String,
    latitude: Number,
    longitude: Number,
    contact: String,
    website: String,
    materials: String
})

let Location = mongoose.model('Location', locationSchema); //Location is the model

module.exports = Location;

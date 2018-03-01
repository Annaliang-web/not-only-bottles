//brew updtae
//mkdir -p data/db-notOnlyBottles
//mongod --dbpath data/db-notOnlyBottles   !!!database file is 'db-notOnlyBottles' //connect database server
//in browser: localhost:27017
//sudo lsof - i : 27017 # checks port 27017
// sudo kill - 9 2294   or go to 'Activity Monitor'
//connect Compass
//npm init
//npm install mongodb --save
//npm install mongoose --save
//npm install express
//npm install body-parser
//create-react-app not-only-bottles
//npm install axios --save
//npm install cheerio --save
// import { request } from 'https';?????? where is this from?
//nodemon server.js 8081
//npm start 

const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = process.argv[2] || 8081 || !27017 || !3000,
      Location = require('./src/models/location') //import Location model

app.use(bodyParser.urlencoded({ extended: false })) //app.post
app.use(function (req, res, next) {  //prevent "fail to load localhost"->"Access-Control-Allow-Origin" in localhost 
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type'); next();
})
app.use(express.static('public')) //connects images stored in public //http://localhost:8081/images/return.png
app.listen(port, console.log('express.js port is listening!'))
console.log(process.argv[2])// ??????? Undefined??????

//-------- Setup Mongoose ---------- //this one connects to database in server because the client side need CRUD from database 
mongoose.connect('mongodb://localhost/data/db/');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=>{
    console.log("Connected to db-notOnlyBottles! $_$")
})


//----------- Setup end points ---------------
//Get All locations on Google map
app.get("/notonlybottles", (req,res)=>{
    Location.find((err,allLocations)=>{
        if(err){
            res.send(err);
        }
    }).then((allLocations)=>{
        console.log('JSON loaded!')
        // console.log(allLocations)
        res.json(allLocations)
    })
})
app.get("/locations", (req,res)=>{

})

app.post("/search", (req,res)=>{

})

app.post("/filter_materials", (req,res)=>{
    
})


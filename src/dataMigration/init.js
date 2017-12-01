//Save web scraped data to Database
//the structure or datat that are in this file is initialed once
//in Terminal:  node init.js 
const mongoose = require('mongoose')
const Location = require('../models/location') //import model

//-------- Setup Mongoose ---------- //raw data connects to the Database so we need to setup this
mongoose.connect('mongodb://localhost/data/db/');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log("Connected to db-notOnlyBottles! $_$")
})
//-------------------------------------------------------------------------------------------------------------------------
let allData = [
    { image:"../images/london.png", name: "London Drugs 41st & Victoria", latitude: 49.23336, longitude: -123.066435639, address: "5639 Victoria Dr, Vancouver, BC V5P 3W2", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image: "../images/eco64.png", name: "Burnaby Eco - Centre", latitude: 49.2614089, longitude: - 122.99520764855, address: "4855 Still Creek Dr, Burnaby, BC V5C", contact: "604 - 448 - 4807", website: "https://www.burnaby.ca/City-Services/Garbage---Recycling/Eco-Centre.html", materials: ["foam packaging ", "electronics", "paint ", "hard plastic ", "scrap metal ", "more... "] },
    { image: "../images/return.png", name: "Edmonds Return It Depot", latitude: 49.221657, longitude: -122.9450457496, address: "7496 Edmonds St, Burnaby, BC V3N 1B2", contact: "604 - 527 - 0146", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/london.png", name: "London Drugs Broadway & Vine", latitude: 49.26373, longitude: -123.156272230, address: "2230 W Broadway, Vancouver, BC V6K 2E3", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/london.png", name: "London Drugs Davie Street", latitude: 49.28545, longitude: -123.139341650, address: " 1650 Davie St, Vancouver, BC V6G 1V9", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/london.png", name: "London Drugs East Hastings", latitude: 49.28144, longitude: -123.052512585, address: " 2585 E Hastings St, Vancouver, BC V5K 1Z1", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image: "../images/recycle64.png", name: "Vancouver South Transfer Station", latitude: 49.2071077, longitude: -123.1137586377, address: "377 W Kent Ave N, Vancouver, BC V5X 4V1", contact: "604 - 873 - 7000", website: "http://vancouver.ca/home-property-development/recycling-and-disposal-facilities.aspx", materials: ["foam packaging ", "electronics "] },
    { image: "../images/recycle64.png", name: "Brentwood London Drugs", latitude: 49.268594, longitude: - 123.0004664567, address: "4567 Lougheed Hwy #400, Burnaby", contact: "604 - 873 - 7000", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/london.png", name: "London Drugs Granville & Georgia", latitude: 49.28222, longitude: -123.11814710, address: "710 Granville St, Vancouver, BC V6Z 1E4", contact: "604 - 448 - 4802", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/london.png", name: "London Drugs Hastings & Abbot", latitude: 49.28228, longitude: -123.10766351, address: "351 Abbott Street, 150, Vancouver, BC V6B 0G6", contact: "604 - 448 - 4878", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image: "../images/recycle64.png", name: "Kitchener Bottle Depot", latitude: 49.270636, longitude: -123.01785583931, address: "3931 Graveley St, Burnaby, BC V5C 3T4", contact: "604 - 294 - 2821", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/london.png", name: "London Drugs Kerrisdale", latitude: 49.2337, longitude: -123.15432091, address: "2091 W 42nd Ave, Vancouver, BC V6M 2B4", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/london.png", name: "London Drugs Olympic Village", latitude: 49.27124, longitude: -123.105911622, address: "1622 Salt St, Vancouver, BC V5Y 0E4", contact: "604 - 448 - 4882", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/london.png", name: "London Drugs Robson Street", latitude: 49.28589, longitude: -123.126421187, address: "1187 Robson St, Vancouver, BC V6E 1B5", contact: "604 - 448 - 4819", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/london.png", name: "London Drugs Wessex - Kingsway", latitude: 49.23283, longitude: -123.035133328, address: "3328 Kingsway, Vancouver, BC V5R 5L1", contact: "604 - 448 - 4828", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/london.png", name: "London Drugs West Broadway", latitude: 49.26351, longitude: -123.11599525, address: "525 W Broadway, Vancouver, BC V5Z 1E6", contact: "604 - 448 - 4804", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/return.png", name: "Lonsdale Bottle & Return - it Depot", latitude: 49.3143285, longitude: -123.0786653142, address: "142A 3rd St W, North Vancouver, BC V7M 1E8", contact: "604 - 980 - 2111", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/recycle64.png", name: "North Shore Bottle Depot", latitude: 49.3196079, longitude: -123.0971803235, address: "235 Donaghy Ave, North Vancouver, BC V7P 2L6", contact: "604 - 985 - 9341", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/recycle64.png", name: "North Shore Recycling Transfer Station", latitude: 49.3010739, longitude: -123.019739330, address: "30 Riverside Dr, North Vancouver, BC V7H 1T4", contact: "604 - 681 - 5600", website: "http://www.metrovancouver.org/services/solid-waste/garbage-recycling/transfer-stations/north-shore-transfer-station", materials: ["foam packaging ", "electronics "] },
    { image:"../images/return.png", name: "North Vancouver Bottle & Return It Depot", latitude: 49.3084832, longitude: -123.0399516310, address: "310 Brooksbank Ave, North Vancouver, BC V7J 2C1", contact: "604 - 924 -3881", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/recycle64.png", name: "North Vancouver London Drugs", latitude: 49.327965, longitude: -123.0716472032, address: "2032 Lonsdale, North Vancouver V7M 2K1", contact: "604 - 924 -3881", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/recycle64.png", name: "Park Royal London Drugs", latitude: 49.327858, longitude: -123.139610875, address: "875 Park Royal North, West Vancouver, BC V7T 1H1", contact: "604 - 924 -3881", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/return.png", name: "Powell Street Return It Bottle Depot", latitude: 49.2843143, longitude: -123.06668581856, address: "1856 Powell St, Vancouver, BC V5L 1H9", contact: "604 - 253 - 4981", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/recycle64.png", name: "South Van Bottle Depot", latitude: 49.2091939, longitude: -123.106361834, address: "34 E 69th Ave, Vancouver, BC V5X 4K6", contact: "604 - 325 - 3371", website: "http://www.bcbottledepot.com/Recycling_Locations.php", materials: ["foam packaging ", "electronics "] },
    { image:"../images/return.png", name: "Vancouver Central Return It Depot", latitude: 49.2391676, longitude: -123.05142312639, address: "2639 Kingsway, Vancouver, BC V5R 5H4", contact: "604 - 434 - 0701", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/recycle64.png", name: "Burnaby London Drugs", latitude: 49.226303, longitude: -122.9931544970, address: "4970 Kingsway, Burnaby, BC V5H 2E", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/recycle64.png", name: "East Hastings Bottle Depot", latitude: 49.2804264, longitude: -122.96168366893, address: "6893 Hastings St, Burnaby, BC V5B 1S9", contact: "604 - 299 - 4215", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/return.png", name: "Kensington Square Return It Centre", latitude: 49.2795932, longitude: -122.96892146518, address: "6518 Hastings St, Burnaby, BC V5B 1S2", contact: "604 - 299 - 9771", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image:"../images/recycle64.png", name: "Lee’s Bottle Depot", latitude: 49.2165126, longitude: -122.97797217385, address: "7385 Buller Ave, Burnaby, BC V5J 4S6", contact: "604 - 435 - 3431", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters  "] },
    { image:"../images/recycle64.png", name: "Lougheed Town Centre London Drugs", latitude: 49.251980, longitude: -122.8962879855, address: "9855 Austin Avenue #101, Burnaby, BC V3J 1N1", contact: "604 - 435 - 3431", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/recycle64.png", name: "Marine & Byme London Drugs", latitude: 49.199301, longitude: -122.9807087280, address: "7280 Market Crossing, Burnaby, BC V5J 0A1", contact: "604 - 435 - 3431", website: "https://www.londondrugs.com/", materials: ["foam packaging ", "brita filters ", "batteries "] },
    { image:"../images/return.png", name: "Metrotown Return It Centre", latitude: 49.2217652, longitude: -122.99639624760, address: "4760 Imperial St, Burnaby, BC V5J 1E3", contact: "604 - 451 - 8818", website: "http://www.return-it.ca‎", materials: ["foam packaging ", "electronics "] },
    { image: "../images/recycle64.png", name: "Reigonal Recycling Vancouver", latitude: 49.2707085, longitude: -123.08266809999998, address: "960 Evans Ave, Vancouver, BC", contact: "877-395-1281", website: "http://www.regionalrecycling.ca/", materials: ["electronics ", "paint ", "scrap metal "] }
]



allData.forEach((location) => { //save each location in the Database
    new Location( //the model 
        { 
            image:location.image,
            name: location.name,
            latitude: location.latitude,
            longitude: location.longitude,
            address: location.address,
            contact: location.contact,
            website: location.website,
            materials: location.materials
        }).save() // .save() is the model's method which will save the objects in database
          .then(()=>{ //.then() is a promise that returns the the saved result //it's optional
            console.log('location added.')
        })
})




// ------------------------------------------
// let allData = [
//     { name: "London Drugs 41st & Victoria", latitude: 49.23336, longitude: -123.066435639, address: "5639 Victoria Dr, Vancouver, BC V5P 3W2", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs Broadway & Vine", latitude: 49.26373, longitude: -123.156272230, address: "2230 W Broadway, Vancouver, BC V6K 2E3", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs Davie Street", latitude: 49.28545, longitude: -123.139341650, address: " 1650 Davie St, Vancouver, BC V6G 1V9", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs East Hastings", latitude: 49.28144, longitude: -123.052512585, address: " 2585 E Hastings St, Vancouver, BC V5K 1Z1", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs Granville & Georgia", latitude: 49.28222, longitude: -123.11814710, address: "710 Granville St, Vancouver, BC V6Z 1E4", contact: "604 - 448 - 4802", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs Hastings & Abbot", latitude: 49.28228, longitude: -123.10766351, address: "351 Abbott Street, 150, Vancouver, BC V6B 0G6", contact: "604 - 448 - 4878", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs Kerrisdale", latitude: 49.2337, longitude: -123.15432091, address: "2091 W 42nd Ave, Vancouver, BC V6M 2B4", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs Olympic Village", latitude: 49.27124, longitude: -123.105911622, address: "1622 Salt St, Vancouver, BC V5Y 0E4", contact: "604 - 448 - 4882", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs Robson Street", latitude: 49.28589, longitude: -123.126421187, address: "1187 Robson St, Vancouver, BC V6E 1B5", contact: "604 - 448 - 4819", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs Wessex - Kingsway", latitude: 49.23283, longitude: -123.035133328, address: "3328 Kingsway, Vancouver, BC V5R 5L1", contact: "604 - 448 - 4828", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "London Drugs West Broadway", latitude: 49.26351, longitude: -123.11599525, address: "525 W Broadway, Vancouver, BC V5Z 1E6", contact: "604 - 448 - 4804", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "Lonsdale Bottle & Return - it Depot", latitude: 49.3143285, longitude: -123.0786653142, address: "142A 3rd St W, North Vancouver, BC V7M 1E8", contact: "604 - 980 - 2111", website: "http://www.return-it.ca‎", materials: "foam electronics" },
//     { name: "North Shore Bottle Depot", latitude: 49.3196079, longitude: -123.0971803235, address: "235 Donaghy Ave, North Vancouver, BC V7P 2L6", contact: "604 - 985 - 9341", website: "http://www.return-it.ca‎", materials: "foam electronics" },
//     { name: "North Shore Recycling Transfer Station", latitude: 49.3010739, longitude: -123.019739330, address: "30 Riverside Dr, North Vancouver, BC V7H 1T4", contact: "604 - 681 - 5600", website: "http://www.metrovancouver.org/services/solid-waste/garbage-recycling/transfer-stations/north-shore-transfer-station", materials: "foam electronics" },
//     { name: "North Vancouver Bottle & Return It Depot", latitude: 49.3084832, longitude: -123.0399516310, address: "310 Brooksbank Ave, North Vancouver, BC V7J 2C1", contact: "604 - 924 -3881", website: "http://www.return-it.ca‎", materials: "foam electronics"},
//     { name: "North Vancouver London Drugs", latitude: 49.327965, longitude: -123.0716472032, address: "2032 Lonsdale, North Vancouver V7M 2K1", contact: "604 - 924 -3881", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "Park Royal London Drugs", latitude: 49.327858, longitude: -123.139610875, address: "875 Park Royal North, West Vancouver, BC V7T 1H1", contact: "604 - 924 -3881", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "Powell Street Return It Bottle Depot", latitude: 49.2843143, longitude: -123.06668581856, address: "1856 Powell St, Vancouver, BC V5L 1H9", contact: "604 - 253 - 4981", website: "http://www.return-it.ca‎", materials: "foam electronics" },
//     { name: "South Van Bottle Depot", latitude: 49.2091939, longitude: -123.106361834, address: "34 E 69th Ave, Vancouver, BC V5X 4K6", contact: "604 - 325 - 3371", website: "http://www.bcbottledepot.com/Recycling_Locations.php", materials: "foam electronics" },
//     { name: "Vancouver Central Return It Depot", latitude: 49.2391676, longitude: -123.05142312639, address: "2639 Kingsway, Vancouver, BC V5R 5H4", contact: "604 - 434 - 0701", website: "http://www.return-it.ca‎", materials: "foam electronics" },
//     { name: "Vancouver South Transfer Station", latitude: 49.2071077, longitude: -123.1137586377, address: "377 W Kent Ave N, Vancouver, BC V5X 4V1", contact: "604 - 873 - 7000", website: "http://vancouver.ca/home-property-development/recycling-and-disposal-facilities.aspx", materials: "foam electronics" },
//     { name: "Brentwood London Drugs", latitude: 49.268594, longitude: - 123.0004664567, address: "4567 Lougheed Hwy #400, Burnaby", contact: "604 - 873 - 7000", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "Burnaby Eco - Centre", latitude: 49.2614089, longitude: - 122.99520764855, address: "4855 Still Creek Dr, Burnaby, BC V5C", contact: "604 - 448 - 4807", website: "https://www.burnaby.ca/City-Services/Garbage---Recycling/Eco-Centre.html", materials: "foam electronics" },
//     { name: "Burnaby London Drugs", latitude: 49.226303, longitude: -122.9931544970, address: "4970 Kingsway, Burnaby, BC V5H 2E", contact: "604 - 448 - 4807", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "East Hastings Bottle Depot", latitude: 49.2804264, longitude: -122.96168366893, address: "6893 Hastings St, Burnaby, BC V5B 1S9", contact: "604 - 299 - 4215", website: "http://www.return-it.ca‎", materials: "foam electronics" },
//     { name: "Edmonds Return It Depot", latitude: 49.221657, longitude: -122.9450457496, address: "7496 Edmonds St, Burnaby, BC V3N 1B2", contact: "604 - 527 - 0146", website: "http://www.return-it.ca‎", materials: "foam electronics" },
//     { name: "Kensington Square Return It Centre", latitude: 49.2795932, longitude: -122.96892146518, address: "6518 Hastings St, Burnaby, BC V5B 1S2", contact: "604 - 299 - 9771", website: "http://www.return-it.ca‎", materials: "foam electronics" },
//     { name: "Kitchener Bottle Depot", latitude: 49.270636, longitude: -123.01785583931, address: "3931 Graveley St, Burnaby, BC V5C 3T4", contact: "604 - 294 - 2821", website: "http://www.return-it.ca‎", materials: "foam electronics" },
//     { name: "Lee’s Bottle Depot", latitude: 49.2165126, longitude: -122.97797217385, address: "7385 Buller Ave, Burnaby, BC V5J 4S6", contact: "604 - 435 - 3431", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "Lougheed Town Centre London Drugs", latitude: 49.251980, longitude: -122.8962879855, address: "9855 Austin Avenue #101, Burnaby, BC V3J 1N1", contact: "604 - 435 - 3431", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "Marine & Byme London Drugs", latitude: 49.199301, longitude: -122.9807087280, address: "7280 Market Crossing, Burnaby, BC V5J 0A1", contact: "604 - 435 - 3431", website: "https://www.londondrugs.com/", materials: "foam brita" },
//     { name: "Metrotown Return It Centre", latitude: 49.2217652, longitude: -122.99639624760, address: "4760 Imperial St, Burnaby, BC V5J 1E3", contact: "604 - 451 - 8818", website: "http://www.return-it.ca‎", materials: "foam electronics" },
// ]




// let allData = [
//     {image:"./r-icons/london.png", name:"London Drugs 41st & Victoria", latitude:49.23336, longitude:-123.066435639, address:"5639 Victoria Dr, Vancouver, BC V5P 3W2", contact : "604 - 448 - 4807", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs Broadway & Vine", latitude:49.26373, longitude:-123.156272230, address:"2230 W Broadway, Vancouver, BC V6K 2E3", contact : "604 - 448 - 4807", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs Davie Street", latitude:49.28545, longitude:-123.139341650, address:" 1650 Davie St, Vancouver, BC V6G 1V9", contact : "604 - 448 - 4807", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs East Hastings", latitude:49.28144, longitude:-123.052512585, address:" 2585 E Hastings St, Vancouver, BC V5K 1Z1", contact : "604 - 448 - 4807", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs Granville & Georgia", latitude:49.28222, longitude:-123.11814710,  address:"710 Granville St, Vancouver, BC V6Z 1E4", contact : "604 - 448 - 4802", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs Hastings & Abbot", latitude:49.28228, longitude:-123.10766351,  address:"351 Abbott Street, 150, Vancouver, BC V6B 0G6", contact : "604 - 448 - 4878", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs Kerrisdale", latitude:49.2337, longitude:-123.15432091, address:"2091 W 42nd Ave, Vancouver, BC V6M 2B4", contact : "604 - 448 - 4807", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs Olympic Village", latitude:49.27124, longitude:-123.105911622, address:"1622 Salt St, Vancouver, BC V5Y 0E4", contact : "604 - 448 - 4882",  website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs Robson Street", latitude:49.28589, longitude:-123.126421187, address:"1187 Robson St, Vancouver, BC V6E 1B5", contact : "604 - 448 - 4819", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs Wessex - Kingsway", latitude:49.23283, longitude:-123.035133328, address:"3328 Kingsway, Vancouver, BC V5R 5L1", contact : "604 - 448 - 4828", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"London Drugs West Broadway", latitude:49.26351, longitude:-123.11599525,  address:"525 W Broadway, Vancouver, BC V5Z 1E6", contact : "604 - 448 - 4804", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/returne.png", name:"Lonsdale Bottle & Return - it Depot", latitude:49.3143285, longitude:-123.0786653142, address:"142A 3rd St W, North Vancouver, BC V7M 1E8", contact : "604 - 980 - 2111", website:"https://www.return-it.ca/", materials:"foam"},
//     {image:"./r-icons/recycle64.png", name:"North Shore Bottle Depot", latitude:49.3196079, longitude:-123.0971803235, address: "235 Donaghy Ave, North Vancouver, BC V7P 2L6", contact : "604 - 985 - 9341", website:"https://www.return-it.ca/", materials:"electronics"},
//     {image:"./r-icons/recycle64.png", name:"North Shore Recycling Transfer Station", latitude:49.3010739, longitude:-123.019739330, address:"30 Riverside Dr, North Vancouver, BC V7H 1T4", contact : "604 - 681 - 5600", website:"http://www.metrovancouver.org/services/solid-waste/garbage-recycling/transfer-stations/north-shore-transfer-station", materials:"electronics"},
//     {image:"./r-icons/returne.png", name:"North Vancouver Bottle & Return It Depot", latitude:49.3084832, longitude:-123.0399516310, address:"310 Brooksbank Ave, North Vancouver, BC V7J 2C1", contact : "604 - 924 -3881", website:"https://www.return-it.ca/", materials:"electronics"},
//     {image:"./r-icons/london.png", name:"North Vancouver London Drugs", latitude:49.327965, longitude:-123.0716472032, address:"2032 Lonsdale, North Vancouver V7M 2K1", contact : "604 - 924 -3881", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"Park Royal London Drugs", latitude:49.327858, longitude:-123.139610875, address:"875 Park Royal North, West Vancouver, BC V7T 1H1", contact : "604 - 924 -3881", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/returne.png", name:"Powell Street Return It Bottle Depot", latitude:49.2843143, longitude:-123.06668581856, address:"1856 Powell St, Vancouver, BC V5L 1H9", contact : "604 - 253 - 4981", website:"https://www.return-it.ca/", materials:"electronics"},
//     {image:"./r-icons/recycle64.png", name:"South Van Bottle Depot", latitude:49.2091939, longitude:-123.106361834, address:"34 E 69th Ave, Vancouver, BC V5X 4K6", contact : "604 - 325 - 3371", website:"http://www.bcbottledepot.com/Recycling_Locations.php", materials:"electronics"},
//     {image:"./r-icons/returne.png", name:"Vancouver Central Return It Depot", latitude:49.2391676, longitude:-123.05142312639, address:"2639 Kingsway, Vancouver, BC V5R 5H4", contact : "604 - 434 - 0701", website:"https://www.return-it.ca/", materials:"electronics"},
//     {image:"./r-icons/recycle64.png", name:"Vancouver South Transfer Station", latitude:49.2071077, longitude:-123.1137586377, address:"377 W Kent Ave N, Vancouver, BC V5X 4V1", contact : "604 - 873 - 7000",  website:"http://vancouver.ca/home-property-development/recycling-and-disposal-facilities.aspx", materials:"electronics"},
//     {image:"./r-icons/london.png", name:"Brentwood London Drugs", latitude:49.268594, longitude:- 123.0004664567, address:"4567 Lougheed Hwy #400, Burnaby", contact:"604 - 873 - 7000", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/eco64.png", name:"Burnaby Eco - Centre", latitude:49.2614089, longitude:- 122.99520764855, address:"4855 Still Creek Dr, Burnaby, BC V5C", contact : "604 - 448 - 4807",website:"https://www.burnaby.ca/City-Services/Garbage---Recycling/Eco-Centre.html", materials:"electronics"},
//     {image:"./r-icons/london.png", name:"Burnaby London Drugs", latitude:49.226303, longitude:-122.9931544970, address:"4970 Kingsway, Burnaby, BC V5H 2E", contact : "604 - 448 - 4807", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/recycle64.png", name:"East Hastings Bottle Depot", latitude:49.2804264, longitude:-122.96168366893, address:"6893 Hastings St, Burnaby, BC V5B 1S9", contact : "604 - 299 - 4215", website:"https://www.return-it.ca/", materials:"electronics"},
//     {image:"./r-icons/returne.png", name:"Edmonds Return It Depot", latitude:49.221657, longitude:-122.9450457496, address:"7496 Edmonds St, Burnaby, BC V3N 1B2", contact : "604 - 527 - 0146", website:"https://www.return-it.ca/", materials:"electronics"},
//     {image:"./r-icons/returne.png", name:"Kensington Square Return It Centre", latitude:49.2795932, longitude:-122.96892146518, address:"6518 Hastings St, Burnaby, BC V5B 1S2", contact : "604 - 299 - 9771", website:"https://www.return-it.ca/", materials:"electronics"},
//     {image:"./r-icons/recycle64.png", name:"Kitchener Bottle Depot", latitude:49.270636, longitude:-123.01785583931, address:"3931 Graveley St, Burnaby, BC V5C 3T4", contact : "604 - 294 - 2821", website:"https://www.return-it.ca/", materials:"electronics"},
//     {image:"./r-icons/recycle64.png", name:"Lee’s Bottle Depot", latitude:49.2165126, longitude:-122.97797217385, address:"7385 Buller Ave, Burnaby, BC V5J 4S6", contact : "604 - 435 - 3431", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/london.png", name:"Lougheed Town Centre London Drugs", latitude:49.251980, longitude:-122.8962879855, address:"9855 Austin Avenue #101, Burnaby, BC V3J 1N1", contact : "604 - 435 - 3431", website:"https://www.londondrugs.com/", materials:"electronics"},
//     {image:"./r-icons/london.png", name:"Marine & Byme London Drugs", latitude:49.199301, longitude:-122.9807087280, address:"7280 Market Crossing, Burnaby, BC V5J 0A1", contact : "604 - 435 - 3431", website:"https://www.londondrugs.com/", materials:"foam"},
//     {image:"./r-icons/returne.png", name:"Metrotown Return It Centre", latitude:49.2217652, longitude:-122.99639624760, address:"4760 Imperial St, Burnaby, BC V5J 1E3", contact : "604 - 451 - 8818", website:"https://www.return-it.ca/", materials:"electronics"},
//     ]
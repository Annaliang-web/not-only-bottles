//-------- Web Scraping ------------
//in Terminal: node dataMigration.js
const cheerio = require('cheerio'), //web scraping
      request = require('request') //web scraping  // to make http calls

let url = "https://recyclebc.ca/recycling-at-home/recycling-depots/#map1";

request(url, (error, response, body) => {
    if (!error) {
        let $ = cheerio.load(body)
        $('.wpgmza-content-address-holder').filter(function () { //cheerio doesn't recognize ()=>{}
            let locations = $(this).text();
            console.log(locations)
        })
    }
})
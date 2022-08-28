const request = require("request");

/*This is the base URL that we will fetch data from.
 We use access key to link our secret key that the API owner generated for me and we use query string 
 which is an option to choose city by langitude and latitude at the end
*/

const url =
  "http://api.weatherstack.com/current?access_key=908f2e487a0a63fce389ab9c3a1fb41c&query=42.6629,21.1655";

//Samples for requesting a wholestack data from weatherstack API.
request({ url: url, json: true }, (error, response) => {
  console.log(response.body);
});

//Samples for requesting detailed data from weatherstack API.
//We go now by getting only the latest observation time that our data was captured
//The parameter: 'json: true' will parse our providen data to JSON.
request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current.observation_time);
});

request({url:url})
const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=908f2e487a0a63fce389ab9c3a1fb41c&query=42.6629,21.1655";

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.location.name);
});





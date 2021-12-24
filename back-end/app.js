'use strict';

const tommorowioAPI = "https://api.tomorrow.io/v4/timelines?";
const API_KEY = "h2pdouuqr2vSMQXSbnkimkRPAwCIWgOk";
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.static("front-end"));

app.get('/', (req, res) => {
    res.status(200).sendFile('./front-end/index.html');
});
app.get('/weather', (req, res) => {
    var lat = req.query.lat;
    var lon = req.query.lon;
    var request_data = {
        "location": lat + "," + lon,
        "fields": "temperature,temperatureApparent,temperatureMax,temperatureMin,windSpeed,windDirection,humidity,pressureSeaLevel,uvIndex,weatherCode,precipitationProbability,precipitationType,sunriseTime,sunsetTime,visibility,moonPhase,cloudCover",
        "units": "imperial",
        "timezone": "America/Los_Angeles",
        "timesteps": "current,1d,1h",
        "apikey": API_KEY
    };
    var request_url_string = tommorowioAPI + "location=" + request_data["location"] + "&fields=" + request_data["fields"] + "&units=" + request_data["units"] + "&timezone=" + request_data["timezone"] + "&timesteps=" + request_data["timesteps"] + "&apikey=" + request_data["apikey"];
    axios.get(request_url_string)
        .then(response =>{
            res.json(response.data["data"]["timelines"]);
        })
        .catch(error =>{
            res.status(404).send("Not Found");
        });
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});


module.exports = app;

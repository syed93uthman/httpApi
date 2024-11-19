var express = require('express');
var app = express();
const flightsInfo = require('./mockFlightsInfo.json');

app.get('/flights', function (req, res) {
    const flightIds = flightsInfo.flights.map(flight => flight.flightId);
    
    const responseData = {
        FlightNumber: flightsInfo.FlightNumber,
        flights: flightIds
    };
    
    console.log(responseData);
    
    res.send(responseData);
})

app.get('/flight/:flightId/info', function (req, res) {
    var success = false;
    var data = flightsInfo;
    const flightId = req.params.flightId;


    var flight = data.flights.find(function (element) {
        if (element.flightId == flightId) {
            success = true;
            return element;
        }
    })

    if (success) {
        console.log(flight);
        res.send(flight);
    }
    else {
        console.log("Flight not found");
        res.send("Flight not found");
    }

})


var server = app.listen(3000, function () {
    console.log("Flights Info Server running at port 3000/");
})
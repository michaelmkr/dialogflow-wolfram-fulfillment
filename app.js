var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var axios = require("axios");
app.use(express.json());


var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});

var responseJSON = {"fulfillment_text": "Hello",};

app.post('/', function (req, res) {
    let userquery = req.body.queryResult.queryText;
    let wolframAnswer = "";
    let userqueryFormatted = userquery.replace(/ /g, "+");
    axios
        .get('http://api.wolframalpha.com/v1/result?appid=LE5L24-9A5G48VGPE&i=' + userqueryFormatted)
        .then(function (response) {
            wolframAnswer = response.data;
            responseJSON.fulfillment_text = wolframAnswer;
            res.json(responseJSON)
        });
});
//TODO check response JSON format for Dialogflow



var express = require('express');
var router = express.Router();

var vision = require('../vision.js');
var fs = require('fs');

var Vision = require('@google-cloud/vision');
var projectId = 'smartcloset-169606';
var visionClient = Vision({
  projectId: projectId
});

var opts = {
  verbose: true
};

var filename = './data/1.jpg';
var index = 1;

const GoogleImages = require('google-images');

const client = new GoogleImages('009281588586401484241:rnp02grnwcy', 'AIzaSyAaWosiFg6mw6D0hze5KHMBOE3zjiwndgA');

var http = require('http');

let getRequestData;

router.post('/', (req, res) => {
	var file = fs.readFileSync(filename);
  var encoded = new Buffer(file).toString('base64');
  var validData = {

    jeans: true,
    cap: true,
    sleeve: true,
    overcoa: true,
    trunks: true,
    jacket: true,
    tuxedo: true,
    'long sleeved t shirt': true,
    't shirt': true,
    plaid: true,
    outerwear: true,
    sweater: true,
    green: true,
    'active pants': true,
    'active shorts': true,
    suit: true,
    undergarment: true,
    'polka dot': true,
    hoodie: true,
    'trench coat': true,
    gown: true,
    red: true,
    dress: true,
    blnd: true,
    wool: true,
    coat: true,
    yellow: true,
    white: true,
    swimwear: true,
    'active undergarment': true,
    shirt: true,
    trousers: true,
    blouse: true,
    black: true,
    tartan: true,
    clothing: true,
    'formal wear': true,
    denim: true,
    pink: true,
    'polo shirt': true,
    'cocktail dress': true,
    blazer: true,
    blue: true,
    'dress shirt': true,
    leather: true

  };
  var image = new Buffer(encoded, 'base64');

  var result = [];

  visionClient.detectLabels(image, opts, function (err, labels, apiResponse) {
    //result = labels;
    console.log(`labels:${labels}`);
    var searchString = '';
    console.log('keyword');
    if(labels !== null) {
      labels.forEach(data => {
        console.log(data.desc);
        fs.appendFile('keyword.txt', `${data.desc}\n`, (err) => {
          if(err) throw err;
        })
        if(validData[data.desc])
          searchString += `${data.desc} `;
      })
      var result = [];

      searchString = "-kid person snapshot " + searchString;
      console.log('searchString : ' + searchString);
      client.search(searchString)
        .then(images => {
          images.pop();
          images.forEach(function (v, idx) {
            result.push(v.url);
          });
        })
        .then(() => getRequestData = result)
      filename = `./data/${++index}.jpg`;
      console.log(filename);
    } else {
      console.log('fail');
    }
  });
});

router.get('/', function (req, res, next) {
  res.json(getRequestData);
})

module.exports = router;

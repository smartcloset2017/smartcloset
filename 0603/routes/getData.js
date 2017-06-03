var express = require('express');
var router = express.Router();

var vision = require('../vision.js');
var fs = require('fs');

var Vision = require('@google-cloud/vision');
var projectId = 'smartcloset-169606';
var visionClient = Vision({
projectId : projectId
});

var opts = {
verbose : true
};

const GoogleImages = require('google-images');

const client = new GoogleImages('009281588586401484241:rnp02grnwcy', 'AIzaSyAaWosiFg6mw6D0hze5KHMBOE3zjiwndgA');

var http = require('http');

router.get('/',function(req,res,next){

		var filename = '1.jpg';
		var file = fs.readFileSync(filename);

		var encoded = new Buffer(file).toString('base64');

		var image = new Buffer(encoded,'base64');

		var result=[];

		visionClient.detectLabels(image,opts,function(err,labels,apiResponse){
				//result = labels;
				console.log(`labels:${labels}`);
				var searchString = '';
				console.log('keyword');
				if (labels !== null) {labels.forEach(data => {
						console.log(data.desc);
						searchString += `${data.desc} `;
						})
				var result = [];

				searchString = searchString + " outfit";
				client.search(searchString)
				.then(images => {
						images.forEach( function(v,idx){
								result.push(v.url);
								/*
								   file.on('finish',function() {

								   });

								   var request = http.get(v.url,function(response){
								   return response.pipe(file);

								   console.log('file insert clear');



								   });
								 */							
								});
						})
				.then( () => res.json(result))
				
				}
				else {
					res.json('fail');
				}

		});	

})

module.exports = router;

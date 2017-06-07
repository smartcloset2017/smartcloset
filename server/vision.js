const Vision = require('@google-cloud/vision');

// Your Google Cloud Platform project ID
const projectId = 'smartcloset-169606';

// Instantiates a client
const visionClient = Vision({
projectId: projectId
});

var fs = require('fs');

var opts = {
verbose: true
};

module.exports = {

get_attribute:function(str){

		      var image = new Buffer(str,'base64');

		      visionClient.detectLabels(image,opts,function(err,labels,apiResponse){
				      //console.log(labels);
				      return new Promise((resolve,reject) => {
					return resolve(labels);
					});
				      });
	      }
}

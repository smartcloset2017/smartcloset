const GoogleImages = require('google-images');

const client = new GoogleImages('009281588586401484241:rnp02grnwcy', 'AIzaSyAaWosiFg6mw6D0hze5KHMBOE3zjiwndgA');

var http = require('http');

var search_str = 'man sylte';

client.search(search_str, {page : i})
.then(images => {
		images.forEach( function(v,idx){
				console.log(v.url);

				file.on('finish',function() {

						});

				var request = http.get(v.url,function(response){
						return response.pipe(file);

						console.log('file insert clear');



						});
				});
});
/*
// paginate results
client.search('Steve Angello', {page: 2});

// search for certain size
client.search('Steve Angello', {size: 'large'});*/
~
~
~
~
~
~
~
~
~
~
~
~


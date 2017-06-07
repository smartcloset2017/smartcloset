var Gpio = require('onoff').Gpio,
    pir = new Gpio(4, 'in', 'both');
//var weather = require('./weather.js');
var say = require('say');
var fs = require('fs');
var exec_photo = require('child_process').exec;
const axios = require('axios');
var photo_path = '1.jpg';
var cmd_photo = 'fswebcam -r 1280x720 ' + photo_path;

const URL = '';
// exports 안에 코드를 넣어주면 됨
module.exports = {
  motion: function() {
    var motion = false;

  	pir.watch(function(err, value) {
   	if (err) exit();
  	say.speak('ready');
  	console.log('Intruder detecting..');
  	if(value == 1) {
  	say.speak('capture!!!!');
  	exec_photo(cmd_photo,function(error,stdout,stderr){
  		console.log('Photo Saved');
  		var file = fs.readFileSync(photo_path);
  		var encoded_file = new Buffer(file).toString('base64');
  		console.log(encoded_file);
  		axios.post(URL)
      .then(() => {
        console.log('post ok');
      })
      .catch((error) => {
        console.log(error);
      })
});


	delay(10000);
}
	});
	say.speak('ready');
	console.log('Pi Bot deployed successfully!');

	function exit() {
	console.log('sadfasdfsdf');
		    pir.unexport();
			  process.exit();
	}

  function delay(gap){ /* gap is in millisecs */
    var then,now;
    then=new Date().getTime();
    now=then;
    while((now-then)<gap){
      now=new Date().getTime();  // 현재시간을 읽어 함수를 불러들인 시간과의 차를 이용하여 처리
    }
  }



    return motion;  // true 면 모션인식이 된 것으로 판단.
  }
}

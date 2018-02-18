var Sound = require('node-aplay');
var EventEmitter = require('multicast-events').EventEmitter;
var music = new Sound('/home/pi/multicastDoorbell/doorbell-2.wav');

var playing = false;

var emitter = new EventEmitter({
  name: 'Doorbell',
  foreignOnly: true
});

music.on('complete', function () {
	playing = false;	
});

emitter.on('event-name', function (data) { 
	console.log('Doorbell!');
	if (playing) {
		music.stop();
		setTimeout(function () {
    			music.play(); // pause the music after five seconds 
		}, 100);
	} else {
		music.play();
		playing = true;
	}
});

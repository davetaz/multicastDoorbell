var exec = require('exec');
var EventEmitter = require('multicast-events').EventEmitter;
var music = '/tmp/multicastDoorbell/doorbell-2.wav';

var playing = false;

var emitter = new EventEmitter({
  name: 'Doorbell',
  foreignOnly: true
});

var complete = function() {
	playing = false;	
};

var ring = function(music) {
	exec('afplay ' + music,complete);
};

emitter.on('event-name', function (data) { 
	console.log('Doorbell!');
	if (playing) {
		setTimeout(function () {
    			ring(music); // pause the music after five seconds 
		}, 100);
	} else {
		ring(music);
		playing = true;
	}
});

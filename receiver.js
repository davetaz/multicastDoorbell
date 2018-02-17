var Sound = require('node-aplay');
var EventEmitter = require('multicast-events').EventEmitter;
var music = new Sound('/home/pi/multicastDoorbell/doorbell-2.wav');

var emitter = new EventEmitter({
  name: 'Doorbell',
  foreignOnly: true
});

emitter.on('event-name', function (data) { 
	console.log('Doorbell!'); 
	music.play();
});

var EventEmitter = require('multicast-events').EventEmitter;
var buttons = require('rpi-gpio-buttons')([40]);
buttons.setTiming({ pressed: 400 });

var emitter = new EventEmitter({
  name: 'Doorbell',
  foreignOnly: true
});

buttons.on('pressed', function (pin) {
	console.log('Doorbell pressed');
	emitter.emit('event-name', '--> emit from emitter');
});

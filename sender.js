var EventEmitter = require('multicast-events').EventEmitter;
var buttons = require('rpi-gpio-buttons')([40]);
var request = require('request');

buttons.setTiming({ pressed: 40 });

var emitter = new EventEmitter({
  name: 'Doorbell',
  foreignOnly: true
});

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'http://nvr2.home:5005',
    method: 'POST',
    headers: headers,
    form: {'ding': 'dong', 'dong': 'ding'}
}

buttons.on('pressed', function (pin) {
	console.log('Doorbell pressed');
	emitter.emit('event-name', '--> emit from emitter');
	request(options, function (error, response, body) {
    		if (!error && response.statusCode == 200) {
    		}
	});
});

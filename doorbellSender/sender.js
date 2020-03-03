var buttons = require('rpi-gpio-buttons')([40]);
var request = require('request');
var dgram = require('dgram');
var s = dgram.createSocket('udp4');
var MULTICAST_IP = "225.0.0.1"

buttons.setTiming({ pressed: 40 });

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

s.bind(8000);

function sendMulticast(s)
{
  var b = new Buffer("Multicast Doorbell!");
  s.send(b, 0, b.length, 8001, MULTICAST_IP, function(err, bytes) {
    console.log("Sent " + bytes + " bytes");
  });
}

buttons.on('pressed', function (pin) {
	console.log('Doorbell pressed');
	sendMulticast(s);
	request(options, function (error, response, body) {
    		if (!error && response.statusCode == 200) {
    		}
	});
});

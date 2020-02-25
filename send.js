var request = require('request');
var EventEmitter = require('multicast-events').EventEmitter;

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

var emitter = new EventEmitter({
  name: 'Doorbell',
  foreignOnly: true
});

// Configure the request
var options = {
    url: 'http://nvr2.home:5005',
    method: 'POST',
    headers: headers,
    form: {'ding': 'dong', 'dong': 'ding'}
}

emitter.emit('event-name', '--> emit from emitter');

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})

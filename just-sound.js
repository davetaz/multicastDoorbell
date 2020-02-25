var EventEmitter = require('multicast-events').EventEmitter;

var emitter = new EventEmitter({
  name: 'Doorbell',
  foreignOnly: true
});

emitter.emit('event-name', '--> emit from emitter');

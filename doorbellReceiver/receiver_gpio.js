var Gpio = require('onoff').Gpio;
var dgram = require('dgram');

var output = new Gpio(11, 'out');
var s = dgram.createSocket('udp4');

var MULTICAST_IP = "225.0.0.1";

s.bind(8001, function() {
  s.addMembership(MULTICAST_IP);
  console.log("listening on all addresses");
});

function setOff() {
        output.writeSync(0);
}

s.on("message", function (msg, rinfo) {
        output.writeSync(1);
        setTimeout(setOff,1000);
});

var dgram = require('dgram');
var s = dgram.createSocket('udp4');
var MULTICAST_IP = "225.0.0.1";

s.bind(8000);

function sendMulticast(s)
{
  var b = new Buffer("Multicast Doorbell!");
  s.send(b, 0, b.length, 8001, MULTICAST_IP, function(err, bytes) {
    console.log("Sent " + bytes + " bytes");
  });
}

sendMulticast(s);
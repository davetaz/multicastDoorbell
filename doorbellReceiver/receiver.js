var Sound = require('node-aplay');
var dgram = require('dgram');
var s = dgram.createSocket('udp4');
const path = require('path');
var music = new Sound(path.join(__dirname, 'doorbell-2.wav'));

var playing = false;

var MULTICAST_IP = "225.0.0.1";

s.bind(8001, function() {
  s.addMembership(MULTICAST_IP);
  console.log("listening on all addresses");
});

s.on("message", function (msg, rinfo) {
  console.log("server got: " + msg + " from " +
  rinfo.address + ":" + rinfo.port);
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

music.on('complete', function () {
	playing = false;	
});


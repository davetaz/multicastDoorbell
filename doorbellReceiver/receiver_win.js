var dgram = require('dgram');
const path = require('path');
var s = dgram.createSocket('udp4');
const notifier = require('node-notifier');

var MULTICAST_IP = "225.0.0.1";

s.bind(8001, function() {
  s.addMembership(MULTICAST_IP);
  //console.log("listening on all addresses");
});

s.on("message", function (msg, rinfo) {
  notifier.notify(
    {
      title: 'Doorbell',
      message: 'Doorbell rang',
      icon: path.join(__dirname, 'icon.jpg'), // Absolute path (doesn't work on balloons)
      sound: true, // Only Notification Center or Windows Toasters
      wait: false, // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
      appID: 'MulticastDoorbell'
    },
    function(err, response) {
      // Response is response from notification
    }
  );
  //console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
});
# multicastDoorbell
A raspberry pi doorbell with sender and receivers for pi, unix and windows. 

Designed to also work with HomeKit via Homebridge and the homebridge-videodoorbell package.

## Setting up the sender (your doorbell)

1. Purchase a dumb doorbell, you only need the button that goes on the outside of the door.

2. Cut the cable and wire this switch and wire the doorbell button to pin 40 of a raspberry pi GPIO, with the other wire to 0V. 

3. Setup your Pi and install nodejs/npm

4. Clone this code into the home directory of "pi"

5. From the sender directory, edit sender.js, in the options section and set the URL to the URL of your homebridge-videodoorbell deployment.

6. Test it by running node sender.js and press your button! 

7. Find the path to your node by running 'which node'

8. Edit the doorbellSender.service file and update the ExecStart line to point at the correct location of node

9. Copy doorbellSender.service to /etc/systemd/system

10. Run `systemctl enable doorbellSender.service`

11. Run `service doorbellSender start`

# multicastDoorbell
A raspberry pi doorbell with sender and receivers for pi, unix and windows. 

Designed to also work with HomeKit via Homebridge and the homebridge-videodoorbell package.

## Setting up the sender (your doorbell)

1. Purchase a dumb doorbell, you only need the button that goes on the outside of the door.

2. Cut the cable and wire this switch and wire the doorbell button to pin 40 of a raspberry pi GPIO, with the other wire to 0V. 

3. Setup your Pi and install nodejs/npm

4. Clone this code into the home directory of "pi"

5. From the `doorbellSender` directory, edit `sender.js`, in the options section and set the URL to the URL of your homebridge-videodoorbell deployment.

6. Run `npm install` within the `doorbellSender` directory to install required dependancies

7. Test it by running `node sender.js` and press your button! 

8. Find the path to your node by running `which node`

9. Edit the doorbellSender.service file and update the ExecStart line to point at the correct location of node

10. Copy `doorbellSender.service` to `/etc/systemd/system`

11. Run `systemctl enable doorbellSender.service`

12. Run `service doorbellSender start`

## Setting up the receiver (Raspberry Pi/Ubuntu etc)

1. Setup your Pi and install nodejs/npm

2. Clone this code into the home directory of "pi"

3. Run `npm install` within the `doorbellReceiver` directory to install required dependancies

4. Test it works by running `node receiver.js` and pressing your doorbell! 

5. Find the path to your node by running `which node`

6. Edit the `doorbellReceiver.service` file and update the ExecStart line to point at the correct location of node (and location of the code if applicable)

7. Copy `doorbellReceiver.service` to `/etc/systemd/system`

8. Run `systemctl enable doorbellReceiver.service`

9. Run `service doorbellReceiver start`

## Setting up the receiver (Windows 10)

1. Install node on windows

2. Clone this code somewhere

3. Run `npm install` within the `doorbellReceiver` directory to install required dependancies

4. Test it works by running `node receiver_win.js` and pressing your doorbell! 

5. To execute it automatically at startup, open the `%AppData%\Microsoft\Windows\Start Menu\Programs\Startup\` directory and add a shortcut to the receiver.vbs file.

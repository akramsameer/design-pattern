import SimpleRemoteControl from './Core/SimpleRemoteControl';
import Light from './Core/Light';
import LightOnCommand from './Core/LightOnCommand';

class RemoteControlTest {
  static run() {
    // create the remote - Invoker
    const remote = new SimpleRemoteControl();

    // the receiver of the request - The Receiver
    const light = new Light();

    //Command creation and pass the receiver to it - Command Object
    const lightOn = new LightOnCommand(light);

    // pass the command to invoker - Parameterized an object
    remote.setCommand(lightOn);
    remote.buttonWasPressed();
  }
}

// Run the test code
RemoteControlTest.run();

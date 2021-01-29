import ICommand from '../Configuration/ICommand';

class SimpleRemoteControl {
  // slot the hold the command which will control one device
  slot: ICommand;

  constructor() {}

  // change the command on the fly if you want the change the behavior
  setCommand(command: ICommand) {
    this.slot = command;
  }

  // button is pressed
  buttonWasPressed() {
    this.slot.execute();
  }
}

export default SimpleRemoteControl;

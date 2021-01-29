import ICommand from '../Configuration/ICommand';

class RemoteControl {
  onCommands: ICommand[];
  offCommands: ICommand[];

  constructor() {
    const noCommand = new NoCommand();

    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  setCommand(slot: number, onCommand: ICommand, offCommand: ICommand) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number) {
    this.onCommands[slot].execute();
  }

  offButtonWasPushed(slot: number) {
    this.offCommands[slot].execute();
  }

  toString() {
    console.log('onCommands', this.onCommands);
    console.log('offCommands', this.offCommands);
  }
}

export default RemoteControl;

class NoCommand implements ICommand {
  execute() {}
}

import ICommand from '../Configuration/ICommand';
import ILight from '../Configuration/ILight';

// We implement the command for turning a light on
class LightOnCommand implements ICommand {
  light: ILight;

  constructor(light: ILight) {
    this.light = light;
  }

  // this should called in the receiving object
  execute() {
    this.light.on();
  }
}

export default LightOnCommand;

import ICommand from '../../SimpleRemoteControl/Configuration/ICommand';
import IStereo from '../Configuration/IStereo';

class StereoOnWithCDCommand implements ICommand {
  stereo: IStereo;

  constructor(stereo: IStereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume();
  }
}

export default StereoOnWithCDCommand;

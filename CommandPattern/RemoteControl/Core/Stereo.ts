import IStereo from '../Configuration/IStereo';

class Stereo implements IStereo {
  on() {
    console.log('turning on the stereo');
  }
  off() {
    console.log('stereo is turning off');
  }
  setCd() {
    console.log('setting the cd');
  }
  setDvd() {
    console.log('setting the dvd');
  }
  setRadio() {
    console.log('setting the radio');
  }
  setVolume() {
    console.log('setting the volume');
  }
}

export default Stereo;

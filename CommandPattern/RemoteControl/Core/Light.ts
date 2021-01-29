import ILight from '../Configuration/ILight';

class Light implements ILight {
  on() {
    console.log('I turning the light on now.');
  }

  off() {
    console.log('the light is off');
  }
}

export default Light;

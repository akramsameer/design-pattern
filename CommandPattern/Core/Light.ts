import ILight from '../Configuration/ILight';

class Light implements ILight {
  on() {
    console.log('I turning the light on now.');
  }
}

export default Light;

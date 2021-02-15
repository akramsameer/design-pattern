import CaffeineBeverage from './Configuration/CaffieneBeverage';

class Coffee extends CaffeineBeverage {
  brew() {
    console.log('Dripping Coffee through filter');
  }

  addCondiments(): void {
    console.log('Adding sugar and milk');
  }
}

export default Coffee;

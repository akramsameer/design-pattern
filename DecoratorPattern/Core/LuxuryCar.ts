import CarDecorator from '../Configuration/CarDecorator';
import ICar from '../Configuration/ICar';

export default class LuxuryCar extends CarDecorator {
  constructor(car: ICar) {
    super(car);
  }

  assemble(): void {
    super.assemble();
    console.log('Adding features of luxury Car');
  }
}

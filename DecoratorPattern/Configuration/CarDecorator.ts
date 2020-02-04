import ICar from './ICar';

export default abstract class CarDecorator implements ICar {
  protected car: ICar;

  constructor(c: ICar) {
    this.car = c;
  }

  assemble(): void {
    this.car.assemble();
  }
}

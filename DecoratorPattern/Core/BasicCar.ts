import ICar from '../Configuration/ICar';

export default class BasicCar implements ICar {
  assemble(): void {
    console.log("I'm now a basic car");
  }
}

import SportCar from './Core/SportCar';
import BasicCar from './Core/BasicCar';
import LuxuryCar from './Core/LuxuryCar';

const sportsCar = new SportCar(new BasicCar());
sportsCar.assemble();

//add responsibilities to individual objects dynamically and transparently, that is, without affecting other objects
const sportsLuxuryCar = new SportCar(new LuxuryCar(new BasicCar()));
sportsLuxuryCar.assemble();

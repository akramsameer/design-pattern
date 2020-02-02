import IObservable from '../Configuration/IObesrvable';
import IObserve from '../Configuration/IObserve';

export default class WeatherStation implements IObservable {
  observers: IObserve[] = [];

  notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
  getState(): string {
    return "I'm the state";
  }
}

import IObserve from '../Configuration/IObserve';
import IObservable from '../Configuration/IObesrvable';

export default class MobilePhone implements IObserve {
  constructor(public observable: IObservable) {}

  update(): void {
    // get the updated state
    this.observable.getState();
    //.. display the state
  }
}

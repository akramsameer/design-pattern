import IObservable from './IObesrvable';

export default interface IObserve {
  // properties
  observable: IObservable;

  //methods
  update(): void;
}

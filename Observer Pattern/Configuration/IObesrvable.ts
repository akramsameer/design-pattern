import IObserve from './IObserve';

export default interface IObservable {
  // properties
  observers: IObserve[];

  // methods
  notify(): void;
  getState(): string;
}

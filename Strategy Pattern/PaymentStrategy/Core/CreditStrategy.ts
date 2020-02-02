import IPaymentStrategy from '../Configuration/IPaymentStrategy';

class CreditStrategy implements IPaymentStrategy {
  pay(): () => void {
    console.log('I Implement the Credit Strategy right now....');
    return;
  }
}

export default CreditStrategy;

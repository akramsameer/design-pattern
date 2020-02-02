import IPaymentStrategy from '../Configuration/IPaymentStrategy';

class PaypalStrategy implements IPaymentStrategy {
  pay(): () => void {
    console.log('I Implement the Paypal Strategy right now....');
    return;
  }
}

export default PaypalStrategy;

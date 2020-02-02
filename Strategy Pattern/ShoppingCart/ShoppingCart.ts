import IPaymentStrategy from '../PaymentStrategy/Configuration/IPaymentStrategy';

class ShoppingCart {
  constructor(public payment: IPaymentStrategy) {}

  pay(): void {
    this.payment.pay();
  }
}

export default ShoppingCart;

interface IPaymentStrategy {
  pay(): () => void;
}

export default IPaymentStrategy;

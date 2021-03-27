interface IPaymentMethod {
  makePayment: (amount: number) => void;
}

class Momo implements IPaymentMethod {
  userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  makePayment(amount: number) {
    console.log(`${this.userId} payment successful: ${amount}`);
  }
}

class MiniStop {
  userId: string;
  paymentMethod: IPaymentMethod;

  constructor(userId: string, paymentMethod: IPaymentMethod) {
    this.userId = userId;
    this.paymentMethod = paymentMethod;
  }

  completeOder(amount: number) {
    this.paymentMethod.makePayment(amount);
  }
}

const ministop = new MiniStop('Minh', new Momo('momo1'));
ministop.completeOder(30_000);

export {};

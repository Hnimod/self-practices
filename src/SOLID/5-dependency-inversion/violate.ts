class Momo {
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
  momoAccount: Momo;

  constructor(userId: string) {
    this.userId = userId;
    this.momoAccount = new Momo('momo1');
  }

  completeOder(amount: number) {
    this.momoAccount.makePayment(amount);
  }
}

const ministop = new MiniStop('Minh');
ministop.completeOder(30_000);

export {};

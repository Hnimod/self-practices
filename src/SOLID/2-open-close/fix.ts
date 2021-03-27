abstract class Asset {
  abstract toVND(): number;
}

class USD extends Asset {
  amount: number;
  exchangeRate: number;

  constructor(amount: number, exchangeRate: number) {
    super();
    this.amount = amount;
    this.exchangeRate = exchangeRate;
  }

  toVND() {
    return this.amount * this.exchangeRate;
  }
}

class RealEstate extends Asset {
  width: number;
  height: number;
  marketPrice: number;

  constructor(width: number, height: number, marketPrice: number) {
    super();
    this.width = width;
    this.height = height;
    this.marketPrice = marketPrice;
  }

  toVND() {
    return this.width * this.height * this.marketPrice;
  }
}

function estimateAssetsToVND(assets: any[]) {
  let total = 0;

  for (const asset of assets) {
    total += asset.toVND();
  }

  return total;
}

const myMoney = estimateAssetsToVND([
  new USD(100, 23000),
  new RealEstate(10, 10, 10_000_000),
]);
console.log(myMoney);

export {};

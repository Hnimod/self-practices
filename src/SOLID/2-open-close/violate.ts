class USD {
  amount: number;
  exchangeRate: number;

  constructor(amount: number, exchangeRate: number) {
    this.amount = amount;
    this.exchangeRate = exchangeRate;
  }
}

class RealEstate {
  width: number;
  height: number;
  marketPrice: number;

  constructor(width: number, height: number, marketPrice: number) {
    this.width = width;
    this.height = height;
    this.marketPrice = marketPrice;
  }
}

function estimateAssetsToVND(assets: any[]) {
  let total = 0;

  for (const asset of assets) {
    if (asset instanceof USD) {
      total += asset.amount * asset.exchangeRate;
    } else {
      total += asset.width * asset.height * asset.marketPrice;
    }
  }

  return total;
}

const myMoney = estimateAssetsToVND([
  new USD(100, 23000),
  new RealEstate(10, 10, 10_000_000),
]);
console.log(myMoney);

export {};

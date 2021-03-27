class Car {
  run() {
    console.log('car is running');
  }

  break() {
    console.log('car is slowing down');
  }
}

class GasCar extends Car {
  refuel(gasVolume: number) {
    console.log(`car has refueled: ${gasVolume} liter`);
  }
}

class ElectricCar extends Car {
  recharge(miliAmpere: number) {
    console.log(`car has charged: ${miliAmpere} mA`);
  }
}

class TeslaCar extends ElectricCar {}

const myTeslaCar = new TeslaCar();
myTeslaCar.run();
myTeslaCar.break();
myTeslaCar.recharge(1000);

export {};

class Car {
  run() {
    console.log('car is running');
  }

  break() {
    console.log('car is slowing down');
  }

  refuel(gasVolume: number) {
    console.log(`car has refueled: ${gasVolume}`);
  }
}

class TeslaCar extends Car {
  refuel() {
    console.log("electric car doesn't use gas");
  }
}

const myTeslaCar = new TeslaCar();
myTeslaCar.run();
myTeslaCar.break();
myTeslaCar.refuel();

export {};

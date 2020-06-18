class Vehicle {
  constructor(public color: string) {
  }

  protected honk(): void {
    console.log('beep');
  }
}


class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('car vroom');
  }

  startDrivingProcess() {
    this.honk();
    this.drive();
  }
}


const car = new Car(3, 'blue');
car.startDrivingProcess();

console.log(car.color);

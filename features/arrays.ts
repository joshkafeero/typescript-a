const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const aCar = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(1);

// Help with 'map'
carMakers.map((theCar: string): string => {
  return theCar.toUpperCase();
});

// Flexible dates
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2020-13-2');
importantDates.push(new Date());

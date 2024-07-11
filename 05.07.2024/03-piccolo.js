function piccolo(arr) {
  const carsInParking = new Set();

  for (carInfo of arr) {
   const [command, carNum] = carInfo.split(', ')

    if (command === "IN") {
      carsInParking.add(carNum);
    } else {
        carsInParking.delete(carNum);
    }
  }
  const carsArr = Array.from(carsInParking);
  carsArr.sort((a, b) => a.localeCompare(b));

  if (carsArr.length === 0) {
    console.log('Parking Lot is Empty');
  } else {
    console.log(carsArr.join('\n'));dsds
  }
}

piccolo(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'IN, CA9999TT',
    
    'IN, CA2866HI',
    
    'OUT, CA1234TA',
    
    'IN, CA2844AA',
    
    'OUT, CA2866HI',
    
    'IN, CA9876HH',
    
    'IN, CA2822UU'])

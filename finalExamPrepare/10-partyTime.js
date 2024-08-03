function solve(input) {
  const totalGuestList = new Set();
  let guest = input.shift();

  while (guest !== "PARTY") {
    totalGuestList.add(guest);
    guest = input.shift();
  }

  for (const guestInList of totalGuestList) {
    for (const guestArrive of input) {
      if (guestInList === guestArrive) {
        totalGuestList.delete(guestArrive);
      }
    }
  }
  let arrToSort = Array.from(totalGuestList);
  let sortedList = arrToSort.sort((a, b) => a - b);

  console.log(totalGuestList.size);
  console.log(sortedList.join("\n"));
}

// solve([
//   "7IK9Yo0h",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
//   "tSzE5t0p",
//   "PARTY",
//   "9NoBUajQ",
//   "Ce8vwPmE",
//   "SVQXQCbc",
// ]);

//Output:
// 2
// 7IK9Yo0h
// tSzE5t0p

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
    ])

//Output:
// 2
// xys2FYzn
// MDzcM9ZK

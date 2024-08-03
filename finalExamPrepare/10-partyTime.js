function solve(input) {
  let vip = [];
  let people = [];
  let guestCount = 0;
  let pattern = /[0-9]/;
  let totalGuestList = [];

  let guest = input.shift();

  while (guest !== "PARTY") {
    
    totalGuestList.push(guest)
    guest = input.shift();
  }

  for (const unit of totalGuestList) {

        for (let guest of input) {
            if (unit === guest) {
                guestCount++;
           if (guest.firstCharAt(0) === pattern) {
            console.log('-------------');
            
           }
        }
    
    
    
  }
let totalGuestCame = totalGuestList.length - guestCount
console.log(totalGuestCame);


  
}

solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

//Output:
// 2
// 7IK9Yo0h
// tSzE5t0p

// solve(['m8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'xys2FYzn',
//     'MDzcM9ZK',
//     'PARTY',
//     '2FQZT3uC',
//     'dziNz78I',
//     'mdSGyQCJ',
//     'LjcVpmDL',
//     'fPXNHpm1',
//     'HTTbwRmM',
//     'B5yTkMQi',
//     '8N0FThqG',
//     'm8rfQBvl',
//     'fc1oZCE0',
//     'UgffRkOn',
//     '7ugX7bm0',
//     '9CQBGUeJ'
//     ])

//Output:
// 2
// xys2FYzn
// MDzcM9ZK

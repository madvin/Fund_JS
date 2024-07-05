function meetings(arr) {
  let meet = {};

  for (const ppl of arr) {
    let [weekday, person] = ppl.split(" ");
    if (meet.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`);
    } else {
      meet[weekday] = person;
      console.log(`Scheduled for ${weekday}`);
    }
  }
  for (const key in meet) {
    console.log(`${key} -> ${meet[key]}`);
    }
  }

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

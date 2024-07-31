function phone(input) {
  let phoneBook = {};
  for (const details of input) {
    const [name, phone] = details.split(' ');
    phoneBook[name] = phone;
  }
  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

phone([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);

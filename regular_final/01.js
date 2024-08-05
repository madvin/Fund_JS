function solve(input) {
  let text = input.shift();

  let command = input.shift();

  while (command !== "Abracadabra") {
    let spell = command.split(" ")[0];
    switch (spell) {
      case "Abjuration":
        text = text.toUpperCase();
        console.log(text);

        break;
      case "Necromancy":
        text = text.toLowerCase();
        console.log(text);
        break;
      case "Illusion":
        let idx = Number(command.split(" ")[1]);
        let newLetter = command.split(" ")[2];
        if (idx >= 0 && idx < text.length) {
          let firstPart = text.substring(0, idx);

          let secondPart = text.substring(idx + 1);
          text = `${firstPart}${newLetter}${secondPart}`;

          console.log("Done!");
        } else {
          console.log("The spell was too weak.");
        }
        break;
      case "Divination":
        let firstSubstring = command.split(" ")[1];
        let secondSubstring = command.split(" ")[2];
        if (text.includes(firstSubstring)) {
          text = text.replaceAll(firstSubstring, secondSubstring);
          console.log(text);
        }
        break;
      case "Alteration":
        let subString = command.split(" ")[1];
        if (text.includes(subString)) {
          text = text.split(subString).join("");
          console.log(text);
        }
        break;

      default:
        console.log("The spell did not work!");

        break;
    }

    command = input.shift();
  }
}

// solve(["A7ci0", "Illusion 1 c", "Illusion 4 o", "Abjuration", "Abracadabra"]);

//Output:
// Done!
// Done!
// ACCIO

// solve(["TR1GG3R",
//     "Necromancy",
//     "Illusion 8 m",
//     "Illusion 9 n",
//     "Abracadabra"])

//Output:
// tr1gg3r
// The spell was too weak.
// The spell was too weak.

// solve([
//   "SwordMaster",
//   "Target Target Target",
//   "Abjuration",
//   "Necromancy",
//   "Alteration master",
//   "Abracadabra",
// ]);

//Output:
// The spell did not work!
// SWORDMASTER
// swordmaster
// sword

solve([
  "SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Divination"
  "Alteration master",
  "Abracadabra",
]);

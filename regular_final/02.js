function solve(input) {
  let n = Number(input.shift());
  for (let i = 0; i < n; i++) {
    let message = input[i];
    let pattern = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<text>[A-Za-z]{8,})\]$/;
    let match = message.match(pattern)
    if (match) {
      let { command, text } = match.groups;
      let asciiValues = Array.from(text)
        .map((char) => char.charCodeAt(0))
        .join(" ");
      console.log(`${command}: ${asciiValues}`);
    } else {
      console.log("The message is invalid");
    }
  }
}

solve(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);

//Output:
// Send: 73 118 97 110 105 115 72 101 114 101
// The message is invalid

// solve(["3",
//     "go:[outside]",
//     "!drive!:YourCarToACarWash",
//     "!Watch!:[LordofTheRings]"])
//Output:
// The message is invalid
// The message is invalid
// Watch: 76 111 114 100 111 102 84 104 101 82 105 110 103 115

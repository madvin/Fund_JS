function imitationGame(arr) {
  let msg = arr.shift();

  let line = arr.shift().split("|");

  while (line[0] !== "Decode") {
    let command = line.shift();

    switch (command) {
      case "Move":
        let letterCount = Number(line.shift());
        let lettersToMove = msg.substring(0, letterCount);
        msg = msg.replace(lettersToMove, "");
        msg += lettersToMove;

        break;
      case "Insert":
        let index = line.shift();
        let value = line.shift();

        msg = msg.substring(0, index) + value + msg.substring(index);
        break;
      case "ChangeAll":
        msg = msg.split(line[0]).join(line[1]);
        break;

      default:
        break;
    }
    line = arr.shift().split("|");
  }
  console.log(`The decrypted message is: ${msg}`);
}

imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

// output:
// The decrypted message is: Hello

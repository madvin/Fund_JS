function secretChat(arr) {
  let chat = arr.shift();
  let occurences = 0;

  while (arr[0] !== "Reveal") {
    let line = arr.shift();
    let tokens = line.split(":|:");
    let command = tokens[0];
    switch (command) {
      case "InsertSpace":
        let i = Number(tokens[1]);
        let firstChat = chat.slice(0, i);
        let secondChat = chat.slice(i);

        chat = `${firstChat} ${secondChat}`;
        console.log(chat);
        break;
      case "Reverse":
        if (occurences != 0) {
          console.log("error");
          continue;
        }
        let part = tokens[1];
        let reversedChat = part.split("").reverse().join("");
        let sliceIndex = Number(chat.length - part.length);
        if (chat.slice(sliceIndex).split("").reverse().join("") === reversedChat && sliceIndex >= 0 && sliceIndex < chat.length) {
          chat = `${chat.slice(0, sliceIndex)}${reversedChat}`;
          console.log(chat);
        } else {
          console.log("error");
        }
        occurences++;
        break;
      case "ChangeAll":
        let newSimbol = tokens[2];
        let oldSimbol = tokens[1];
        
        chat = chat.split(oldSimbol).join(newSimbol);

        console.log(chat);
        break;
    }
  }
  console.log(`You have a new text message: ${chat}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);

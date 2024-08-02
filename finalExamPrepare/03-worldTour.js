function solve(input) {
  let destinations = input.shift();
  let tokens = input.shift();

  while (tokens !== "Travel") {
    if (tokens.startsWith("Add Stop")) {
      let line = tokens.split(":");

      let givenIndex = Number(line[1]);
      let strToAdd = line[2];
      if (givenIndex >= 0 && givenIndex < destinations.length) {
        let firstPart = destinations.slice(0, givenIndex);
        let secondPart = destinations.slice(givenIndex);
        destinations = `${firstPart}${strToAdd}${secondPart}`;
        console.log(destinations);
      } else {
        continue;
      }
    } else if (tokens.startsWith("Remove Stop")) {
      let line = tokens.split(":");
      let startIdx = Number(line[1]);
      let endIdx = Number(line[2]);

      if (
        startIdx >= 0 &&
        endIdx >= 0 &&
        startIdx < destinations.length &&
        endIdx < destinations.length
      ) {
        let firstPart = destinations.slice(0, startIdx);
        let secondPart = destinations.slice(endIdx + 1);

        destinations = firstPart + secondPart;
        console.log(destinations);
      } else {
        console.log(destinations);
      }
    } else if (tokens.startsWith("Switch")) {
      let line = tokens.split(":");
      let strToRemove = line[1];
      let newStr = line[2];
      let startIdx = destinations.indexOf(strToRemove);
      let endIdx = startIdx + strToRemove.length;
      if (startIdx >= 0 && endIdx < destinations.length) {
        destinations =
          destinations.slice(0, startIdx) + newStr + destinations.slice(endIdx);
        console.log(destinations);
        break;
      } else {
        console.log(destinations);

        break;
      }
    }

    tokens = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${destinations}`);
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
//Output:
// Hawai::RomeCyprys-Greece
// Hawai::Rome-Greece
// Bulgaria::Rome-Greece
// Ready for world tour! Planned stops: Bulgaria::Rome-Greece

// solve([
//   "Albania:Bulgaria:Cyprus:Deuchland",
//   "Add Stop:3:Nigeria",
//   "Remove Stop:4:8",
//   "Switch:Albania: Azərbaycan",
//   "Travel",
// ]);

//       Output:
// AlbNigeriaania:Bulgaria:Cyprus:Deuchland
// AlbNaania:Bulgaria:Cyprus:Deuchland
// AlbNaania:Bulgaria:Cyprus:Deuchland
// Ready for world tour! Planned stops: AlbNaania:Bulgaria:Cyprus:Deuchland

// solve(['Hawai::Cyprys-Greece',
//     'Add Stop:7:Rome',
//     'Remove Stop:11:16',
//     'Switch:Hawai:Bulgaria',
//     'Travel'])

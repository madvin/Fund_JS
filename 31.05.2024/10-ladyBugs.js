function ladyBugs(input) {
  const fieldSize = input[0];
  const ladyBugsIdx = input[1].split(" ").map(Number);
  const field = [];

  for (let i = 0; i < fieldSize; i++) {
    if (ladyBugsIdx.includes(i)) {
      field[i] = 1;
    } else {
      field[i] = 0;
    }
  }
  for (let i = 2; i < input.length; i++) {
    let command = input[i].split(" ");
    let idxOfLadybug = Number(command[0]);
    let direction = command[1];
    let movingSteps = Number(command[2]);

    if (!field[idxOfLadybug]) {
      continue;
    }
    field[idxOfLadybug] = 0;
    if (direction == "right") {
      let newPosition = idxOfLadybug + movingSteps;
      while (field[newPosition] == 1) {
        newPosition += movingSteps;
      }
      if (newPosition < field.length) {
        field[newPosition] = 1;
      }
    } else if (direction == "left") {
      let newPosition = idxOfLadybug - movingSteps;
      while (field[newPosition] == 1) {
        newPosition -= movingSteps;
      }
      if (newPosition >= 0) {
        field[newPosition] = 1;
      }
    }
  }
  console.log(field.join(" "));
}

// ladyBugs([3, "0 1", "0 right 1", "2 right 1"]);
// ladyBugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladyBugs([ 5, '3',
    '3 left 2',
    '1 left -2'])

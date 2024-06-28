function adventure(input) {
    let grid = input[0].split('|').map(Number);
    let commands = input.slice(1);
    let totalItemsCollected = 0;

    for (let command of commands) {
        if (command === "Adventure over") {
            break;
        }

        if (command.startsWith("Step Backward")) {
            let [_, startIndex, steps] = command.split('$').map(Number);
            if (startIndex < 0 || startIndex >= grid.length) continue;
            let newIndex = (startIndex - steps % grid.length + grid.length) % grid.length;
            totalItemsCollected += grid[newIndex];
            grid[newIndex] = 0;
        }

        if (command.startsWith("Step Forward")) {
            let [_, startIndex, steps] = command.split('$').map(Number);
            if (startIndex < 0 || startIndex >= grid.length) continue;
            let newIndex = (startIndex + steps) % grid.length;
            totalItemsCollected += grid[newIndex];
            grid[newIndex] = 0;
        }

        if (command.startsWith("Double")) {
            let index = parseInt(command.split(' ')[1]);
            if (index < 0 || index >= grid.length) continue;
            grid[index] *= 2;
        }

        if (command === "Switch") {
            grid.reverse();
        }
    }

    console.log(grid.join(' - '));
    console.log(`Robo finished the adventure with ${totalItemsCollected} items!`);
}

// Test case
adventure([
    "20|30|40|50|60",
    "Step Backward$0$12",
    "Step Forward$4$15",
    "Step Backward$2$5",
    "Double 1",
    "Switch",
    "Adventure over"
]);

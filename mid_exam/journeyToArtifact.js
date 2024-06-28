function journey(input) {
    let energy = Number(input.shift());
    let artifactFoundPoints = 0;
    let artifactsFound = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === 'mountain') {
            energy -= 10;
            artifactFoundPoints++;
        } else if (command === 'desert') {
            energy-= 15;
        } else if (command === 'forest') {
            energy += 7;
        }
        if (artifactFoundPoints % 3 === 0 && artifactFoundPoints > 0) {
            artifactFoundPoints = 0;
            artifactsFound++;
            if (artifactsFound === 3) {
                console.log(`The character reached the legendary artifact with ${energy.toFixed(2)} energy left.`);
                return;
            }
        }
        if (energy <= 0) {
            console.log('The character is too exhausted to carry on with the journey.');
            return;
        }
        if (command === 'Journey ends here!') {
            break;
        }
    }
    if (artifactsFound < 3) {
    console.log(`The character could not find all the pieces and needs ${3 - artifactsFound} more to complete the legendary artifact.`);
    } else {
        console.log(`The character reached the legendary artifact with ${energy.toFixed(2)} energy left.`);
    }
}
journey(["130.0",
    "mountain",
    "desert",
    "mountain",
    "forest",
    "mountain",
    "desert",
    "desert",
    "mountain",
    "mountain",
    "desert",
    "mountain",
    "forest",
    "mountain",
    "mountain",
    "forest",
    "mountain",
    "Journey ends here!"])
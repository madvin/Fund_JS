function manageShelf(input) {
    let shelf = input[0].split('&');
    let commands = input.slice(1);

    for (let command of commands) {
        if (command === "Done") {
            break;
        }

        let [action, ...params] = command.split(' | ');

        if (action === "Add Book") {
            let book = params[0];
            if (!shelf.includes(book)) {
                shelf.unshift(book);
            }
        } else if (action === "Take Book") {
            let book = params[0];
            let index = shelf.indexOf(book);
            if (index !== -1) {
                shelf.splice(index, 1);
            }
        } else if (action === "Swap Books") {
            let [book1, book2] = params;
            let index1 = shelf.indexOf(book1);
            let index2 = shelf.indexOf(book2);
            if (index1 !== -1 && index2 !== -1) {
                [shelf[index1], shelf[index2]] = [shelf[index2], shelf[index1]];
            }
        } else if (action === "Insert Book") {
            let book = params[0];
            if (!shelf.includes(book)) {
                shelf.push(book);
            }
        } else if (action === "Check Book") {
            let index = Number(params[0]);
            if (index >= 0 && index < shelf.length) {
                console.log(shelf[index]);
            }
        }
    }

    console.log(shelf.join(', '));
}

// Test cases
manageShelf([
    "Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"
]);

// manageShelf([
//     "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
//     "Add Book | Catch-22",
//     "Swap Books | Anna Karenina | Catch-22",
//     "Take Book | David Copperfield",
//     "Done"
// ]);

// manageShelf([
//     "War and Peace&Hamlet&Ulysses&Madame Bovary",
//     "Check Book | 2",
//     "Swap Books | Don Quixote | Ulysses",
//     "Done"
// ]);

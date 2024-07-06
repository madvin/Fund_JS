function solve(arr) {
  const targetWords = arr.shift().split(" ");
  const wordOcure = {};

  for (const targetWord of targetWords) {
    wordOcure[targetWord] = 0;
  }

  for (const word of arr) {
    if (word in wordOcure) {
      wordOcure[word]++;
    }
    
  }
  const finalResult = Object.entries(wordOcure);
  finalResult.sort((a, b) => b[1] - a[1]);

  for (const [word, occurencies] of finalResult) {
    console.log(`${word} - ${occurencies}`);
  }
}

solve([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);

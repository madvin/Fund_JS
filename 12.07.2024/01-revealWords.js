function reveal(words, text) {
  const censoredWords = words.split(', ');
  const strToWords = text.split(' ');
  const templates = strToWords.filter(word => word.includes('*'));
  const newText = ''
  for (const template of templates) {
    const rightWord = censoredWords.find(word => word.length === template.length);
    text = text.replace(template, rightWord);
  }
  console.log(text);
}

reveal(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);

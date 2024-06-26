function pig(input) {
  let food = Number(input[0]) * 1000;
  let hay = Number(input[1]) * 1000;
  let cover = Number(input[2]) * 1000;
  let weight = Number(input[3]) * 1000;

  let time = 30;

  for (let day = 1; day <= time; day++) {
    food -= 300;
    if (day % 2 === 0) {
      hay -= 0.05 * food;
    }
    if (day % 3 === 0) {
      cover -= weight / 3;
    }
    if (food < 0 || hay < 0 || cover < 0) {
      console.log("Merry must go to the pet store!");
      return;
    }
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(
      2
    )}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
  );
}
pig(["10", "5", "5.2", "1"]);

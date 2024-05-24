function thePyramidOfKingDjoser(base, increment) {
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  let height = 0;
  let stairHigh = 1;

  for (let i = base; i > 0; i -= 2) {
    height += increment
    let curArea = i ** 2;
    let curStone = (i - 2) ** 2;
    let curMarble = curArea - curStone;
    if (i <= 2) {
      gold = curArea * increment;
    } else {
    if ( stairHigh % 5 == 0) {
      let curLapis = curMarble;
      stone += curStone * increment;
      lapis += curLapis * increment;
    } else {
      stone += curStone * increment;
      marble += curMarble * increment;
    }
    }
    stairHigh++;
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);

  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjoser(12,

  1);

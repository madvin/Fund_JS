function matrix(num) {
  for (let j = 0; j < num; j++) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr += `${num} `;
    }
    console.log(arr);
  }
}

matrix(10);

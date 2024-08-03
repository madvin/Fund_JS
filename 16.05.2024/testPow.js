function buildAWall(sections) {
  sections = sections.map(Number);

  const maxHeight = 30;
  const concretePerFoot = 195;
  const costPerCubicYard = 1900;

  let totalConcrete = 0;
  let dailyConcreteUsage = [];

  while (true) {
    let dailyConcrete = 0;

    for (let i = 0; i < sections.length; i++) {
      if (sections[i] < maxHeight) {
        sections[i]++;
        dailyConcrete += concretePerFoot;
      }
    }

    if (dailyConcrete === 0) break;

    dailyConcreteUsage.push(dailyConcrete);

    totalConcrete += dailyConcrete;
  }

  const totalCost = totalConcrete * costPerCubicYard;

  console.log(dailyConcreteUsage.join(", "));
  console.log(`${totalCost} pesos`);
}
buildAWall([21, 25, 28]);

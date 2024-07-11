function companyUsers(arr) {
  const companyEmployees = {};
  for (const data of arr) {
    const [company, userId] = data.split(" -> ");

    if (company in companyEmployees) {
      if (!companyEmployees[company].includes(userId)) {
        companyEmployees[company].push(userId);
      }
    } else {
      companyEmployees[company] = [userId];
    }
  }
  const companyEntries = Object.entries(companyEmployees);
  companyEntries.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, userIdArr] of companyEntries) {
    console.log(name);
    for (const userId of userIdArr) {
      console.log(`-- ${userId}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

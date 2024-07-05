function employees(arr) {
    for (const employeeName of arr) {
        const personalNumber = employeeName.length;
        const employee = {
            name: employeeName,
            personalNum: personalNumber
        }
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])
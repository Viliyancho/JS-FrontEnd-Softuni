function people(input){
    const solve = input.reduce((acc,curr) => {
    acc[curr] = curr.length;
        return acc;
        }, {})

        Object.entries(solve).forEach(([name, length]) => console.log(`Name: ${name} -- Personal Number: ${length}`))
}


people([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
function solve(input){
    const cities = input.map(city => {
        const [name, latitude, longitude] = city.split(" | ")
        return [name,latitude,longitude];
    }) ;

    cities.forEach(([name,latitude,longitude]) => {
        console.log(`{ town: '${name}', latitude: '${Number(latitude).toFixed(2)}', longitude: '${Number(longitude).toFixed(2)}' }`);
    });
     
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);

//console.log(`{ town: '${name}', latitude: '${Number(latitude).toFixed(2)}', longitude: '${Number(longitude).toFixed(2)}' }`))
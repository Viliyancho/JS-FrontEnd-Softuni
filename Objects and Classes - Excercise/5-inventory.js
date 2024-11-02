function solve(input){
    const heroes = input.map((hero) => {
        let [name, level, ...items] = hero.split(" / ");
        level = Number(level);
        return [name, level, items];
    })


    for (const [name, level, items] of heroes.sort((heroA, heroB) => heroA.level - heroB.level)) {
        console.log(`Hero: ${name}`);
        console.log(`Level => ${level}`);
        console.log(`Items => ${items}`);
    }
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);
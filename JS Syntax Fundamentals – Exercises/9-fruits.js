function CalculateFruitPrice(fruit, grams, pricePerKG){
    let fruitKilograms = grams/1000;
    let price = fruitKilograms * pricePerKG;

    console.log(`I need $${price.toFixed(2)} to buy ${fruitKilograms.toFixed(2)} kilograms ${fruit}.`);
}
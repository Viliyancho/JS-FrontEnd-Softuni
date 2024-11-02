function oddAndEvenSum(number){
    let oddSum = 0;
    let evenSum = 0;
    let thing = number.toString();
    for (let index = 0; index < thing.length; index++) {
        let digit = Number(thing[index]);
        if(digit % 2 === 0){
            evenSum += digit;
        }
        else{
            oddSum += digit;
        }
        
    }
      
    

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);
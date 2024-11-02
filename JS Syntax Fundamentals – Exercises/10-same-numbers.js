function SameNumber(number){
    let digit = 0;
    let validation = true;
    while(true){
        digit = number % 10;
        number = Math.floor(number / 10);

        if(digit !== number % 10){
            console.log('false');
            validation = false;
            break;
        }
    }
    if(validation)
    {
        console.log("true");
    }

    let sum = 0;
    while(number !== 0){
        sum+= number%10;
        number = Math.floor(number / 10);
    }
    console.log(sum);
}
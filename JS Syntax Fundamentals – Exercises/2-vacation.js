function CalculatePrice(count, typeOfGroup, dayOfWeek){
    let price = 0;
    switch(typeOfGroup){
        case "Students":
            if(dayOfWeek === "Friday"){
                price = count * 8.45;
            }
            else if(dayOfWeek == "Saturday"){
                price = count * 9.80;
            }
            else if(dayOfWeek == "Sunday"){
                price = count * 10.46;
            }

            if(count >= 30)
            {
                price *= 0.85;
            }
        break;
        case "Business":
            let businessValue = 0;
            if(dayOfWeek === "Friday"){
                businessValue = 10.90;
                price = count * businessValue;
            }
            else if(dayOfWeek == "Saturday"){
                businessValue = 15.60;
                price = count * businessValue;
            }
            else if(dayOfWeek == "Sunday"){
                businessValue = 16;
                price = count * businessValue;
            }

            if(count >= 100)
            {
                price -= 10 * businessValue;
            }
        break;
        case "Regular":
            if(dayOfWeek === "Friday"){
                price = count * 15;
            }
            else if(dayOfWeek == "Saturday"){
                price = count * 20;
            }
            else if(dayOfWeek == "Sunday"){
                price = count * 22.50;
            }

            if(count >= 10 && count<=20)
            {
                price *= 0.95;
            }
        break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}


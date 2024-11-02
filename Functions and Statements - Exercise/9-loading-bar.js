function loadingBar(number){
    if(number === 100)
    {
        console.log("100% Complete!");
        return;
    }

    const percentageRepeat = number / 10;
    const dotRepeat = 10 - percentageRepeat;

    console.log(`${number}% [${'%'.repeat(percentageRepeat)}${'.'.repeat(dotRepeat)}]`);
    console.log("Still loading...");
}

loadingBar(90);
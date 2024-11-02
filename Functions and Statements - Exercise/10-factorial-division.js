function factorialDivision(first, second){
    let firstSum = 1;
    let secondSum = 1;

    for (let index1 = 2; index1 <= first; index1++) {
        firstSum *= index1;
    }

    for (let index2 = 2; index2 <= second; index2++) {
        secondSum *= index2;
    }

    return (firstSum/secondSum).toFixed(2);
}

console.log(factorialDivision(5,2));
function solve(first, second, third){
const addOperation = sum(first, second);
const substractOperation = substract(addOperation, third);
return substractOperation;
}

function sum(first, second) {
    return first + second;
}

function substract(first, second) {

    return first - second;
}

console.log(solve(23, 6, 10));
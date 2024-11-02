function Sum(first, second){
    let sum = 0;
    let arr = [];
    for (let index = first; index <= second; index++) {
        sum+=index;
        arr.push(index);
    }
    console.log(arr.join(' '));
    console.log(`Sum: ${sum}`);
}

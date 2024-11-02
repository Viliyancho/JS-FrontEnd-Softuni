function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
  }

function checkEverything(arr){
    let results = [];
    for (let index = 0; index < arr.length; index++) {
        let validate = isPalindrome(arr[index]);
        results.push(validate);
    }
    return results.join(" ");
}

console.log(checkEverything([121,232,453,555]));
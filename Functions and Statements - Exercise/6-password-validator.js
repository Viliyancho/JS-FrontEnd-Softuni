function passwordValidator(password){
    
    let isValid = true;

    if(password.length < 6 || password > 10){
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    for (let char of password) {
        if (!isLetter(char) && !isDigit(char)) {
          console.log(`Password must consist only of letters and digits`);
          isValid = false;
          break;
        }
      }

      let digitCount = 0;

      for (let char of password){
        if(isDigit(char)){
            digitCount++;
        }
      }

      if(digitCount < 2){
        console.log("Password must have at least 2 digits");
        isValid = false;
      }

      if(isValid){
        console.log("Password is valid");
      }
}

function isDigit(char) {
    return char >= 0 && char <= 9;
  }
  function isLetter(char) {
    return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
  }

passwordValidator('Pa$s$s');
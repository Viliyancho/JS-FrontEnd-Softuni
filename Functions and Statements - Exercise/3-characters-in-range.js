function getAsciiCode(character1, character2) {
    let symbol1 = character1.charCodeAt(0);
    let symbol2 = character2.charCodeAt(0);
    
    for (let index = symbol1 + 1; index < symbol2; index++) {
      console.log(String.fromCharCode(index));
      
    }
  }

  getAsciiCode('a', 'r');
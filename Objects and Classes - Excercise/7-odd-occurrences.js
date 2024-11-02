function solve(input){
        
        input = input.toLowerCase();
      
        const words = input.split(' ');
      
        const wordCount = {};
        
        words.forEach((word) => {
          if (wordCount.hasOwnProperty(word)) {
            wordCount[word]++;
          } else {
            wordCount[word] = 1;
          }
        });
      
        const oddOccurrences = Object.keys(wordCount).filter(
          (word) => wordCount[word] % 2 !== 0);
        
        console.log(oddOccurrences.join(" "));
      }
      
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
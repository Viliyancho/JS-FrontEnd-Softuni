function solve(input){
    const [first, ...allAfter] = input;
    
    let wordsOccurances = first.split(" ").reduce((acc,curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    allAfter.forEach((word) => {
        if(wordsOccurances.hasOwnProperty(word)){
            wordsOccurances[word]++;
        }
    })

    Object.keys(wordsOccurances).forEach((word) => {
        console.log(`${word} - ${wordsOccurances[word]}`);
    })

}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    );
function forLoop(input) {

    let word = input[0];
    let sumVowels = 0;

    for(let index = 0; index < word.length; index++) {
        let currentLetter = word[index];

        switch(currentLetter){
            case "a": sumVowels += 1; break;
            case "e": sumVowels += 2; break;
            case "i": sumVowels += 3; break;
            case "o": sumVowels += 4; break;
            case "u": sumVowels += 5; break;
        }
    }
    console.log(sumVowels)

}

forLoop(["hello"]);
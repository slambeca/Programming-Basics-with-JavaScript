function printNumbers(input) {

    let startingNumber = Number(input[0]);

    for(let num = startingNumber; num >= 1; num--) {
        console.log(num);
    }

}

printNumbers(["5"]);
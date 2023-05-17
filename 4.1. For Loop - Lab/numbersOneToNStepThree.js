function printNumbers(input) {

    let endingNumber = Number(input[0]);

    for(let num = 1; num <= endingNumber; num+=3) {
        console.log(num);
    }
}

printNumbers(["15"]);
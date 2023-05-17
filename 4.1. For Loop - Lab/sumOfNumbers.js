function sumOfNumbers(input) {

    let numberAsString = input[0]; // "1234"
    let sumOfDigits = 0;

    for (let index = 0; index < numberAsString.length; index++) {
        let currentNumber = Number(numberAsString[index]);
        sumOfDigits += currentNumber;
    }

    console.log(`The sum of the digits is:${sumOfDigits}`);

}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);
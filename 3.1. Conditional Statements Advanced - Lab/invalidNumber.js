function checkNumber(input) {

    let number = Number(input[0]);

    if ((number >= 100 && number <= 200) || (number === 0)) {
        {}
    } else {
        console.log("invalid");
    }


}

checkNumber(["75"]);
checkNumber(["150"]);
checkNumber(["220"]);
checkNumber(["199"]);
checkNumber(["-1"]);
checkNumber(["100"]);
checkNumber(["200"]);
checkNumber(["0"]);
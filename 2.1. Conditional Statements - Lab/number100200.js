function checkNumber(input) {

    let number = Number(input[0]);
    let result = "";

    if (number > 200) {
        result = "Greater than 200";

    } else if (number < 100) {
        result = "Less than 100";

    } else {
        result = "Between 100 and 200";
    }

    console.log(result);
}

checkNumber(["201"]);
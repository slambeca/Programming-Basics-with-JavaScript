function calculator(input) {

    let depositedSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let interestRate = depositedSum * (annualInterestRate / 100);
    let interestRatePerMonth = interestRate / 12;
    let finalSum = depositedSum + depositTerm * interestRatePerMonth;

    console.log(finalSum);

}

calculator(["2350", "6", "7"]);
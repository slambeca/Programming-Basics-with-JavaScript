function bonusScore(input) {

    let initialNumber = Number(input[0]);
    let bonusPoints = 0;
    let extraBonusPoints = 0;

    if (initialNumber > 1000) {
        bonusPoints = initialNumber * 0.1;
    } else if (initialNumber > 100) {
        bonusPoints = initialNumber * 0.2;
    } else {
        bonusPoints = 5;
    }

    if (initialNumber % 2 === 0) {
        extraBonusPoints = 1;
    }

    if (initialNumber % 10 === 5) {
        extraBonusPoints = 2;
    }

    console.log(bonusPoints + extraBonusPoints);
    console.log(bonusPoints + initialNumber + extraBonusPoints);

}

bonusScore(["15875"]);
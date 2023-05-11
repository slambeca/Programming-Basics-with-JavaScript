function calculateMoney(input) {

    let journeyPrice = Number(input.shift());
    let countPuzzles = Number(input.shift());
    let countTalkingDolls = Number(input.shift());
    let countTeddyBears = Number(input.shift());
    let countMinions = Number(input.shift());
    let countLorries = Number(input.shift());

    let pricePuzzle = 2.60;
    let priceTalkingDoll = 3.00;
    let priceTeddyBear = 4.10;
    let priceMinion = 8.20;
    let priceLorry = 2.00;

    let finalSum = countPuzzles * pricePuzzle + countTalkingDolls * priceTalkingDoll + countTeddyBears * priceTeddyBear +
        countMinions * priceMinion + countLorries * priceLorry // 680

    if (countPuzzles + countTalkingDolls + countTeddyBears + countMinions + countLorries >= 50) {
        finalSum *= 0.75
    }

    let rent = finalSum * 0.10
    let revenue = finalSum - rent

    if (revenue >= journeyPrice) {
        console.log(`Yes! ${(revenue - journeyPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(journeyPrice - revenue).toFixed(2)} lv needed.`)
    }

}

calculateMoney(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])
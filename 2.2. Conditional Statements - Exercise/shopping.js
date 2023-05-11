function calc(input) {

    let peterBudget = Number(input.shift());
    let numberGPUs = Number(input.shift());
    let numberCPUs = Number(input.shift());
    let numberRAMs = Number(input.shift());

    let gpusPrice = numberGPUs * 250;
    let cpusPrice = gpusPrice * 0.35;
    let ramsPrice = gpusPrice * 0.10;
    let totalPriceRam = ramsPrice * numberRAMs;
    let totalPriceCpu = cpusPrice * numberCPUs;
    let total = gpusPrice + totalPriceCpu + totalPriceRam;

    if (numberGPUs >= numberCPUs) {
        total = total * 0.85;
    }

    if (total <= peterBudget) {
        console.log(`You have ${(peterBudget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - peterBudget).toFixed(2)} leva more!`);
    }

}

calc(['900', '2', '1', '3'])
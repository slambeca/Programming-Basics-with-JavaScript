function totalSpending(input) {

    let priceNylon = 1.50;
    let pricePaint = 14.50;
    let priceThinner = 5.00;
    let pricePackages = 0.40;

    let quantityNylon = Number(input[0]);
    let quantityPaint = Number(input[1]);
    let quantityThinner = Number(input[2]);
    let hoursForWorkers = Number(input[3]);

    let totalPriceNylon = (quantityNylon + 2) * priceNylon;
    let totalPricePaint = (quantityPaint * 1.10) * pricePaint;
    let totalPriceThinner = quantityThinner * priceThinner;

    let totalSum = totalPriceNylon + totalPricePaint + totalPriceThinner + pricePackages;

    let priceForWorkers = totalSum * 0.30;
    let finalSum = priceForWorkers * hoursForWorkers + totalSum;

    console.log(finalSum);

}

totalSpending(["5 ",
    "10 ",
    "10 ",
    "1 "]
)
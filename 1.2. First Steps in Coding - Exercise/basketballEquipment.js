function totalSpendings(yearTax) {

    let priceSneakers = Number(yearTax) * 0.60;
    let priceJersey = priceSneakers * 0.80;
    let priceBall = priceJersey * 0.25;
    let priceAccessoires = priceBall * 0.20;

    let totalSum = priceSneakers + priceJersey + priceBall + priceAccessoires + Number(yearTax);

    console.log(totalSum);

}

totalSpendings(["550"])
function yardGreening(input) {

    let squareMetersToBeGreened = Number(input[0]);
    let priceForSquareMeter = 7.61;
    let discount = 0.18;

    let priceForGreening = squareMetersToBeGreened * priceForSquareMeter;
    let discountPrice = priceForGreening * discount;
    let finalPrice = priceForGreening - discountPrice;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`)

}

yardGreening(["550"]);
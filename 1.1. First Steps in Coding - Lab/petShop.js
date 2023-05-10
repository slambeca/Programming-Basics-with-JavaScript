function petShop(input) {

    let dogPackages = Number(input[0]);
    let catPackages = Number(input[1]);

    let priceDogFood = 2.50;
    let priceCatFood = 4.00;

    let result = dogPackages * priceDogFood + catPackages * priceCatFood;

    console.log(`${result} lv.`);

}

petShop(["13", "9"]);
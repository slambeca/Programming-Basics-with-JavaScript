function calculateResult(input) {

    let pricePens = 5.80;
    let priceMarkers = 7.20;
    let priceDetergent = 1.20;

    let penPackages = Number(input[0]);
    let markerPackages = Number(input[1]);
    let detergentLiters = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let result = (penPackages * pricePens + markerPackages * priceMarkers + detergentLiters * priceDetergent) *
        ((100 - discountPercentage) / 100);

    console.log(result);

}

calculateResult(["4 ",
    "2 ",
    "5 ",
    "13 "]
)
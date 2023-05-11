function checkFruitOrVegetable(input) {

    let fruit = input[0];

    if (fruit === "banana" || fruit === "apple" || fruit === "kiwi" || fruit === "cherry" || 
    fruit === "lemon" || fruit === "grapes") {
        console.log("fruit");
    } else if (fruit === "tomato" || fruit === "cucumber" || fruit === "pepper" || fruit === "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }

}

checkFruitOrVegetable(["banana"]);
checkFruitOrVegetable(["apple"]);
checkFruitOrVegetable(["tomato"]);
checkFruitOrVegetable(["water"]);
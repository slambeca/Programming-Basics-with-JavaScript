function foodDelivery([chiken, fish, vegan]) {

    let chikenPrice = 10.35;
    let fishPrice = 12.40;
    let veganPrice = 8.15;

    let total = chiken * chikenPrice + fish * fishPrice + vegan * veganPrice;

    total *= 1.2;
    total += 2.50;

    console.log(`Total: ${total.toFixed(2)}`);
}

foodDelivery(["9 ",
    "2 ",
    "6 "]
)
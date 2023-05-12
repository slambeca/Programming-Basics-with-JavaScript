function cinemaFunc(input) {

    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    let profit = 0;

    switch(type) {
        case "Premiere": profit = rows * columns * 12.00; break;
        case "Normal": profit = rows * columns * 7.50; break;
        case "Discount": profit = rows * columns * 5.00; break;
    }

    console.log(`${profit.toFixed(2)} leva`);
}

cinemaFunc(["Premiere",
"10",
"12"]);

cinemaFunc(["Normal",
"21",
"13"]);

cinemaFunc(["Discount",
"12",
"30"]);

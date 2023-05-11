function timePlus(input) {
    let hours = Number(input.shift());
    let minutes = Number(input.shift()) + 15;
    let zero = "";

    if (minutes > 59) {
        hours += 1;
        minutes -= 60;
    }
    if (hours >= 24) {
        hours -= 24;
    }
    if (minutes < 10) {
        zero = 0;
    }

    console.log(`${hours}:${zero}${minutes}`);
}

timePlus(["1",
    "46"])
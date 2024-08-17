function fishTank(input) {
    let tankLength = Number(input[0]);
    let tankWidth = Number(input[1]);
    let tankHeight = Number(input[2]);
    let percent = Number(input[3]);

    let tankVolume = tankLength * tankWidth * tankHeight;
    let totalLiters = tankVolume * 0.001;

    percent *= 0.01;

    let realLiters = totalLiters * (1 - percent);

    console.log(realLiters);
}

fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);

// Variant 2
function fishTank(input) {
    const [tankLength, tankWidth, tankHeight, percent] = input.map(Number);
    const realLiters = tankLength * tankWidth * tankHeight * 0.001 * (1 - percent / 100);
    
    console.log(realLiters);
}

fishTank(["85", "75", "47", "17"]);
fishTank(["105", "77", "89", "18.5"]);

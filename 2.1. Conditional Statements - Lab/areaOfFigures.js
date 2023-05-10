function calculateArea(input) {

    let figure = input[0]

    if (figure === "square") {
        let lenght = Number(input[1]);
        result = lenght ** 2;
    } else if (figure === "rectangle") {
        let lenghtOne = Number(input[1]);
        let lengthTwo = Number(input[2]);
        result = lenghtOne * lengthTwo
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        result = Math.PI * radius ** 2
    } else if (figure === "triangle") {
        let lenght = Number(input[1]);
        let height = Number(input[2]);
        result = lenght * height / 2
    }

    console.log(`${result.toFixed(3)}`);
}

calculateArea(["triangle",
    "4.5",
    "20"])
    ;
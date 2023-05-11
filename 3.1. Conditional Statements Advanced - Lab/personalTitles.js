function personTitles(input) {

    let age = Number(input.shift());
    let gender = input.shift();

    if (gender === "m") {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    } else {
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.");
        }
    }

}

personTitles(["12",
"f"]);
personTitles(["17",
"m"]);
personTitles(["25",
"f"]);
personTitles(["13.5",
"m"]);
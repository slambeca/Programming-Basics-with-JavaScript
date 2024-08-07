function concatenateData(input) {

    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

concatenateData(["Borislav", "Ivanov", 20, "Sofia"]);

// Variant 2
function concatenateData(input) {
    console.log(`You are ${input[0]} ${input[1]}, a ${Number(input[2])}-years old person from ${input[3]}.`);

concatenateData(["Borislav", "Ivanov", 20, "Sofia"]);

function checkDay(input) {

    let day = Number(input[0]);

    if (day === 1) {
        console.log("Monday");
    } else if (day === 2) {
        console.log("Tuesday")
    } else if (day === 3) {
        console.log("Wednesday");
    } else if (day === 4) {
        console.log("Thursday");
    } else if (day === 5) {
        console.log("Friday");
    } else if (day === 6) {
        console.log("Saturday");
    } else if (day === 7) {
        console.log("Sunday");
    } else {
        console.log("Error");
    };

}

checkDay(["-1"]);

// Variant 2
// function checkDay(input) {

//     let day = Number(input[0])

//     switch (day) {
//         case 1: console.log("Monday"); break;
//         case 2: console.log("Tuesday"); break;
//         case 3: console.log("Wednesday"); break;
//         case 4: console.log("Thursday"); break;
//         case 5: console.log("Friday"); break;
//         case 6: console.log("Saturday"); break;
//         case 7: console.log("Sunday"); break;
//         default: console.log("Error"); break;

//     }
// }

// checkDay(["1"]);
// checkDay(["2"]);
// checkDay(["3"]);
// checkDay(["4"]);
// checkDay(["5"]);
// checkDay(["6"]);
// checkDay(["7"]);
// checkDay(["-1"]);
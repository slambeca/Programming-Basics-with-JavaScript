function checkIfOpen(input) {

    let hour = Number(input.shift());
    let day = input.shift();

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" ||
    day === "Saturday") {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }
}

checkIfOpen(["11",
"Sunday"]);
function checkPrice(input) {

    let ticketPrice = 0;
    let day = input[0];

    switch(day) {
        case "Monday": case "Tuesday": case "Friday": ticketPrice = 12; console.log(ticketPrice); break;
        case "Wednesday": case "Thursday": ticketPrice = 14; console.log(ticketPrice); break;
        default: ticketPrice = 16; console.log(ticketPrice); break;
    }
}

checkPrice(["Sunday"]);
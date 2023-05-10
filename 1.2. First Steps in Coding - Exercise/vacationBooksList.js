function calculateHours(input) {

    let numberOfPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let numberOfDays = Number(input[2]);

    let timeForCurrentBook = numberOfPages / pagesForHour;
    let result = timeForCurrentBook / numberOfDays;

    console.log(result);

}

calculateHours(["432 ",
    "15 ",
    "4 "]
)
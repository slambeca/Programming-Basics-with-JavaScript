function worldSwimmingRecord(input) {

    let recordInSeconds = Number(input.shift());
    let distanceInMeters = Number(input.shift());
    let timeInSeconds = Number(input.shift());

    let distancedNeeded = distanceInMeters * timeInSeconds;
    let every15Km = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = distancedNeeded + every15Km;

    if (recordInSeconds <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime - recordInSeconds).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
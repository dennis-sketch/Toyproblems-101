function demeritPoints(speed) {
    const speedLimit = 70;
    const kmPoint = 5;

    if (speed <= speedLimit) {
        console.log("OK");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPoint);

        if (points >= 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}


demeritPoints(80);
